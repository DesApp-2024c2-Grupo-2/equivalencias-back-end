'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [carrera] = await queryInterface.sequelize.query(
      `SELECT * FROM "Usuarios_carreras" WHERE CarreraId = 1;`
    );

    // Si no existe la carrera, entonces insertarla
    if (!carrera) {
      return queryInterface.bulkInsert('Usuarios_carreras', [
        {
          UsuarioId: 2,
          CarreraId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 2,
          CarreraId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 2,
          CarreraId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 6,
          CarreraId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 6,
          CarreraId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('La carrera ya existe. No se insertó.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios_carreras', null, {});
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [carrera] = await queryInterface.sequelize.query(
      `SELECT * FROM "Usuarios_carreras" WHERE "CarreraId" = 1;` // Usar "CarreraId" entre comillas si la columna tiene mayúsculas
    );

    // Si no existe la carrera, entonces insertarla
    if (!carrera || carrera.length === 0) {
      // Asegurarse de que el resultado esté vacío antes de insertar
      return queryInterface.bulkInsert('Usuarios_carreras', [
        {
          UsuarioId: 2,
          CarreraId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 2,
          CarreraId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 2,
          CarreraId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 6,
          CarreraId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UsuarioId: 6,
          CarreraId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('La carrera ya existe. No se insertó.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios_carreras', null, {});
  },
};
