'use strict';

// me inspiré en
// https://stackoverflow.com/questions/45286429/custom-query-on-sequelize-seeder
// cambiando la notación de Promise a async/await

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuario" WHERE dni = '30563652' `,
      `SELECT id FROM "Usuarios" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    let usuario1;
    if (user1Data.length > 0) {
      usuario1 = user1Data[0].id;
    } else {
      console.log("El usuario con id 1 no existe.");
      return; // No continuar si no existe el usuario
    }

    const carrera_1 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Tecnicatura en informatica' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera1 = carrera_1[0].id;

    const user2Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '35025698' `,
      `SELECT id FROM "Usuarios" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario2 = user2Data[0].id;

    const carrera_2 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Profesorado de Ingles' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera2 = carrera_2[0].id;

    const user3Data = await queryInterface.sequelize.query(
      // `SELECT id FROM "Usuarios" WHERE dni = '35563675' `,
      `SELECT id FROM "Usuarios" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario3 = user3Data[0].id;

    const carrera_3 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Lic. en Biotecnologia' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera3 = carrera_3[0].id;

    const user4Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '35563652' `,
      `SELECT id FROM "Usuarios" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario4 = user4Data[0].id;

    const carrera_4 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Lic. en Educacion' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera4 = carrera_4[0].id;

    const user5Data = await queryInterface.sequelize.query(
      //`SELECT id FROM "Usuarios" WHERE dni = '29025755' `,
      `SELECT id FROM "Usuarios" WHERE id = '6' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario5 = user5Data[0].id;

    const carrera_5 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Tec. en Metalurgica' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera5 = carrera_5[0].id;

    await queryInterface.bulkInsert('Equivalencia', [
      {
        instituto: 'Untref',
        estado: 'pendiente',
        carrera: 'Ingenieria en sistemas en equivalencia',
        observaciones: 'falta analitico',
        UsuarioId: usuario1,
        CarreraId: carrera1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instituto: 'Untref',
        estado: 'pendiente',
        carrera: 'Ingenieria en sistemas en equivalencia',
        observaciones: 'falta dni',
        UsuarioId: usuario2,
        CarreraId: carrera2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        instituto: 'Untref',
        estado: 'pendiente',
        carrera: 'Ingenieria en sistemas',
        observaciones: 'falta analitico en equivalencia',
        UsuarioId: usuario3,
        CarreraId: carrera3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        instituto: 'Untref',
        estado: 'pendiente',
        carrera: 'Ingenieria en sistemas',
        observaciones: 'falta analitico en equivalencia',
        UsuarioId: usuario4,
        CarreraId: carrera4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        instituto: 'Untref',
        estado: 'pendiente',
        carrera: 'Ingenieria en sistemas',
        observaciones: 'no hay observaciones en equivalencia',
        UsuarioId: usuario5,
        CarreraId: carrera5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Equivalencia', null, {});
  },
};
*/

//'use strict';

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verificar si el usuario con id = 1 existe
    const user1Data = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id = '1'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    let usuario1;
    if (user1Data.length > 0) {
      usuario1 = user1Data[0].id;
    } else {
      console.log('El usuario con id 1 no existe.');
      return; // No continuar si no existe el usuario
    }

    // Verificar si la carrera 'Tecnicatura en informatica' existe
    const carrera_1 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Tecnicatura en informatica'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera1 = carrera_1.length > 0 ? carrera_1[0].id : null;

    // Verificar si el usuario con id = 3 existe
    const user2Data = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id = '3'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario2 = user2Data.length > 0 ? user2Data[0].id : null;

    // Verificar si la carrera 'Profesorado de Ingles' existe
    const carrera_2 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Profesorado de Ingles'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera2 = carrera_2.length > 0 ? carrera_2[0].id : null;

    // Verificar si el usuario con id = 4 existe
    const user3Data = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id = '4'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario3 = user3Data.length > 0 ? user3Data[0].id : null;

    // Verificar si la carrera 'Lic. en Biotecnologia' existe
    const carrera_3 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Lic. en Biotecnologia'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera3 = carrera_3.length > 0 ? carrera_3[0].id : null;

    // Verificar si el usuario con id = 5 existe
    const user4Data = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id = '5'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario4 = user4Data.length > 0 ? user4Data[0].id : null;

    // Verificar si la carrera 'Lic. en Educacion' existe
    const carrera_4 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Lic. en Educacion'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera4 = carrera_4.length > 0 ? carrera_4[0].id : null;

    // Verificar si el usuario con id = 6 existe
    const user5Data = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id = '6'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const usuario5 = user5Data.length > 0 ? user5Data[0].id : null;

    // Verificar si la carrera 'Tec. en Metalurgica' existe
    const carrera_5 = await queryInterface.sequelize.query(
      `SELECT id FROM "Carrera" WHERE nombre_carrera = 'Tec. en Metalurgica'`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const carrera5 = carrera_5.length > 0 ? carrera_5[0].id : null;

    // Insertar en la tabla 'Equivalencia' solo si los usuarios y carreras existen
    if (
      usuario1 &&
      carrera1 &&
      usuario2 &&
      carrera2 &&
      usuario3 &&
      carrera3 &&
      usuario4 &&
      carrera4 &&
      usuario5 &&
      carrera5
    ) {
      await queryInterface.bulkInsert('Equivalencia', [
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas en equivalencia',
          observaciones: 'falta analitico',
          UsuarioId: usuario1,
          CarreraId: carrera1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas en equivalencia',
          observaciones: 'falta dni',
          UsuarioId: usuario2,
          CarreraId: carrera2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas',
          observaciones: 'falta analitico en equivalencia',
          UsuarioId: usuario3,
          CarreraId: carrera3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas',
          observaciones: 'falta analitico en equivalencia',
          UsuarioId: usuario4,
          CarreraId: carrera4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas',
          observaciones: 'no hay observaciones en equivalencia',
          UsuarioId: usuario5,
          CarreraId: carrera5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('Faltan usuarios o carreras para realizar la inserción');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Equivalencia', null, {});
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const checks = [
      { usuarioId: 1, carreraNombre: 'Tecnicatura en informatica' },
      { usuarioId: 3, carreraNombre: 'Profesorado de Ingles' },
      { usuarioId: 4, carreraNombre: 'Lic. en Biotecnologia' },
      { usuarioId: 5, carreraNombre: 'Lic. en Educacion' },
      { usuarioId: 6, carreraNombre: 'Tec. en Metalurgica' },
    ];

    // Obtener usuarios
    const usuarios = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id IN (1, 3, 4, 5, 6)`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    console.log('Usuarios encontrados:', usuarios);

    // Obtener carreras
    const carreras = await queryInterface.sequelize.query(
      `SELECT id, nombre_carrera FROM "Carrera" WHERE nombre_carrera IN ('Tecnicatura en informatica', 'Profesorado de Ingles', 'Lic. en Biotecnologia', 'Lic. en Educacion', 'Tec. en Metalurgica')`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    console.log('Carreras encontradas:', carreras);

    // Crear mapas de usuarios y carreras
    const usuariosMap = usuarios.reduce((acc, usuario) => {
      acc[usuario.id] = usuario.id;
      return acc;
    }, {});

    const carrerasMap = carreras.reduce((acc, carrera) => {
      acc[carrera.nombre_carrera] = carrera.id;
      return acc;
    }, {});

    // Filtrar registros válidos
    const registrosVálidos = checks
      .map(({ usuarioId, carreraNombre }) => ({
        usuarioId,
        carreraId: carrerasMap[carreraNombre],
      }))
      .filter(
        ({ usuarioId, carreraId }) => usuariosMap[usuarioId] && carreraId
      );

    const usuarioIds = registrosVálidos.map((registro) => registro.usuarioId);
    const carreraIds = registrosVálidos.map((registro) => registro.carreraId);

    if (usuarioIds.length === 0 || carreraIds.length === 0) {
      console.log('No hay registros válidos para procesar.');
      return;
    }

    const existingRecords = await queryInterface.sequelize.query(
      `SELECT "UsuarioId", "CarreraId" 
       FROM "Equivalencia" 
       WHERE "UsuarioId" IN (${usuarioIds.join(',')}) 
         AND "CarreraId" IN (${carreraIds.join(',')})`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const existingRecordsSet = new Set(
      existingRecords.map((record) => `${record.UsuarioId}-${record.CarreraId}`)
    );

    const registrosParaInsertar = registrosVálidos.filter(
      ({ usuarioId, carreraId }) =>
        !existingRecordsSet.has(`${usuarioId}-${carreraId}`)
    );

    if (registrosParaInsertar.length > 0) {
      await queryInterface.bulkInsert(
        'Equivalencia',
        registrosParaInsertar.map(({ usuarioId, carreraId }) => ({
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas',
          observaciones: 'falta analitico',
          UsuarioId: usuarioId,
          CarreraId: carreraId,
          createdAt: new Date(),
          updatedAt: new Date(),
        }))
      );
    } else {
      console.log('No hay registros nuevos para insertar (todos ya existen).');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Equivalencia', null, {});
  },
};
