'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Universidad_origen', 'disabled', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Valor predeterminado para la nueva columna
      after: 'sigla', // Especificar la columna después de la cual se debe colocar
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Universidad_origen', 'disabled');
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna "disabled" ya existe
    const tableDescription = await queryInterface.describeTable(
      'Universidad_origen'
    );

    // Verificar si la columna "disabled" ya existe
    if (!tableDescription.disabled) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Universidad_origen', 'disabled', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Valor predeterminado para la nueva columna
        after: 'sigla', // Especificar la columna después de la cual se debe colocar
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "disabled" si existe
    return queryInterface.removeColumn('Universidad_origen', 'disabled');
  },
};
