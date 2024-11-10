'use strict';
/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equivalencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      instituto: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      estado: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      carrera: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      observaciones: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Equivalencia');
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Equivalencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      instituto: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      estado: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      carrera: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      observaciones: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      UsuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios', // Referencia a la tabla 'Usuarios'
          key: 'id', // Columna de referencia en 'Usuarios'
        },
        onUpdate: 'CASCADE', // Si se actualiza el usuario, actualiza el 'UsuarioId' en 'Equivalencia'
        onDelete: 'SET NULL', // Si se elimina un usuario, pone el 'UsuarioId' en NULL
        allowNull: false, // Si un 'Equivalencia' requiere un 'UsuarioId'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Equivalencia');
  },
};
