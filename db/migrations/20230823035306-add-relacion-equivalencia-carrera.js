'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Equivalencia',
      'CarreraId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carrera',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Equivalencia', 'CarreraId');
  }
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna "CarreraId" ya existe
    const tableDescription = await queryInterface.describeTable('Equivalencia');

    // Verificar si la columna "CarreraId" ya existe
    if (!tableDescription.CarreraId) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Equivalencia', 'CarreraId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carrera', // Referencia a la tabla 'Carrera'
          key: 'id', // Columna de referencia en 'Carrera'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "CarreraId" si existe
    return queryInterface.removeColumn('Equivalencia', 'CarreraId');
  },
};
