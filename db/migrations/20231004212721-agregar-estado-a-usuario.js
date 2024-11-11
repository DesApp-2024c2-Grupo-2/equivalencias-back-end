'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Usuarios', 'estado', {
      type: Sequelize.STRING,
      allowNull: true, // Opcional, dependiendo de tus requisitos
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Usuarios', 'estado');
  },
};*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla 'Usuarios' para verificar si la columna 'estado' ya existe
    const tableDescription = await queryInterface.describeTable('Usuarios');

    // Verificar si la columna 'estado' ya existe
    if (!tableDescription.estado) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Usuarios', 'estado', {
        type: Sequelize.STRING,
        allowNull: true, // Opcional, dependiendo de tus requisitos
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna 'estado' si existe
    return queryInterface.removeColumn('Usuarios', 'estado');
  },
};
