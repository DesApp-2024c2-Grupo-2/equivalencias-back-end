'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Mensajes',
      'id_equivalencia',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Equivalencia',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Mensajes', 'id_equivalencia');
  }
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna "id_equivalencia" ya existe
    const tableDescription = await queryInterface.describeTable('Mensajes');

    // Verificar si la columna "id_equivalencia" ya existe
    if (!tableDescription.id_equivalencia) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Mensajes', 'id_equivalencia', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Equivalencia', // Referencia a la tabla 'Equivalencia'
          key: 'id', // Columna de referencia en 'Equivalencia'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "id_equivalencia" si existe
    return queryInterface.removeColumn('Mensajes', 'id_equivalencia');
  },
};
