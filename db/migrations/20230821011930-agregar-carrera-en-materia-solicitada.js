'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Materia_solicitada', 'carrera', {
      type: Sequelize.STRING,
      after: 'EquivalenciumId', // Especificar la columna después de la cual se debe colocar
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      // en que tabla
      'Materia_solicitada',
      // nombre de la columna
      'carrera'
    );
  },
};*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna "carrera" ya existe
    const tableDescription = await queryInterface.describeTable(
      'Materia_solicitada'
    );

    // Verificar si la columna "carrera" ya existe
    if (!tableDescription.carrera) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Materia_solicitada', 'carrera', {
        type: Sequelize.STRING,
        after: 'EquivalenciumId', // Especificar la columna después de la cual se debe colocar
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "carrera" si existe
    return queryInterface.removeColumn('Materia_solicitada', 'carrera');
  },
};
