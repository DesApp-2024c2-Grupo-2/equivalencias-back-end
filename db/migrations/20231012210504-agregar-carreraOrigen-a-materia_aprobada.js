'use strict';

/*module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Materia_aprobada', 'carreraOrigen', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Materia_aprobada', 'carreraOrigen');
  },
};*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla 'Materia_aprobada' para verificar si la columna 'carreraOrigen' ya existe
    const tableDescription = await queryInterface.describeTable(
      'Materia_aprobada'
    );

    // Verificar si la columna 'carreraOrigen' ya existe
    if (!tableDescription.carreraOrigen) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn('Materia_aprobada', 'carreraOrigen', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna 'carreraOrigen' si existe
    return queryInterface.removeColumn('Materia_aprobada', 'carreraOrigen');
  },
};
