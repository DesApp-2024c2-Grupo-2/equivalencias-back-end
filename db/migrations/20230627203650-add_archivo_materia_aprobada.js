'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Materia_aprobada', 'archivo', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null, // Valor predeterminado para la nueva columna
      after: 'certificado', // Especificar la columna después de la cual se debe colocar
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Materia_aprobada', 'archivo');
  },
};*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna "archivo" ya existe
    const tableDescription = await queryInterface.describeTable(
      'Materia_aprobada'
    );

    // Verificar si la columna "archivo" ya existe
    if (!tableDescription.archivo) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Materia_aprobada', 'archivo', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null, // Valor predeterminado para la nueva columna
        after: 'certificado', // Especificar la columna después de la cual se debe colocar
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "archivo" si existe
    return queryInterface.removeColumn('Materia_aprobada', 'archivo');
  },
};
