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
    // Definir las verificaciones en un array
    const checks = [
      {
        usuarioId: 369,
        carreraNombre: 'Tecnicatura en informatica',
        carrera: 'Ingenieria en sistemas',
        observaciones: 'falta analitico',
        instituto: 'UnTref',
        estado: 'pendiente',
      },
      {
        usuarioId: 370,
        carreraNombre: 'Profesorado de Ingles',
        carrera: 'Lic. en Educacion',
        observaciones: 'falta dni',
        instituto: 'UTN',
        estado: 'pendiente',
      },
      {
        usuarioId: 371,
        carreraNombre: 'Lic. en Biotecnologia',
        carrera: 'Lic. en Biotecnologia',
        observaciones: 'falta analitico en equivalencia',
        instituto: 'UnLAM',
        estado: 'pendiente',
      },
      {
        usuarioId: 372,
        carreraNombre: 'Lic. en Educacion',
        carrera: 'Lic. en Educacion',
        observaciones: 'falta dni',
        instituto: 'UnSAM',
        estado: 'pendiente',
      },
      {
        usuarioId: 373,
        carreraNombre: 'Tec. en Metalurgica',
        carrera: 'Tec. en Metalurgica',
        observaciones: 'no hay observaciones en equivalencia',
        instituto: 'UBA',
        estado: 'pendiente',
      },
    ];

    // Obtener usuarios
    const usuarios = await queryInterface.sequelize.query(
      `SELECT id FROM "Usuarios" WHERE id IN (369, 370, 371, 372, 373)`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    console.log('Usuarios obtenidos:', usuarios);

    // Obtener carreras
    const carreras = await queryInterface.sequelize.query(
      `SELECT id, nombre_carrera FROM "Carrera" WHERE nombre_carrera IN ('Tecnicatura en informatica', 'Profesorado de Ingles', 'Lic. en Biotecnologia', 'Lic. en Educacion', 'Tec. en Metalurgica')`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    console.log('Carreras obtenidas:', carreras);

    // Crear mapas de usuarios y carreras para facilitar el acceso a los IDs
    const usuariosMap = usuarios.reduce((acc, usuario) => {
      acc[usuario.id] = usuario.id;
      return acc;
    }, {});

    const carrerasMap = carreras.reduce((acc, carrera) => {
      acc[carrera.nombre_carrera] = carrera.id;
      return acc;
    }, {});

    console.log('Mapa de usuarios:', usuariosMap);
    console.log('Mapa de carreras:', carrerasMap);

    // Filtrar registros válidos
    const registrosVálidos = checks
      .map(
        ({
          usuarioId,
          carreraNombre,
          carrera,
          observaciones,
          instituto,
          estado,
        }) => {
          // Verificar que el instituto no sea nulo o indefinido
          if (!instituto) {
            console.error(
              `Instituto faltante para usuarioId: ${usuarioId}, carrera: ${carrera}`
            );
            return null; // Retornar null si el instituto está vacío
          }
          return {
            usuarioId,
            carreraId: carrerasMap[carreraNombre],
            carrera,
            observaciones,
            instituto,
            estado,
          };
        }
      )
      .filter((item) => item !== null); // Filtrar los elementos nulos

    console.log('Registros válidos para insertar:', registrosVálidos);

    // Verifica si hay registros válidos antes de intentar insertar
    if (registrosVálidos.length > 0) {
      // Preparar datos para la inserción con datos dinámicos
      const datosParaInsertar = registrosVálidos.map(
        ({
          usuarioId,
          carreraId,
          carrera,
          observaciones,
          instituto,
          estado,
        }) => ({
          instituto,
          estado,
          carrera,
          observaciones,
          UsuarioId: usuarioId,
          CarreraId: carreraId,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      );

      // Usar bulkInsert para insertar los datos
      await queryInterface.bulkInsert('Equivalencia', datosParaInsertar);
      console.log('Registros insertados correctamente:', datosParaInsertar);
    } else {
      console.log('No hay registros válidos para insertar.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar todos los registros de la tabla Equivalencia
    await queryInterface.bulkDelete('Equivalencia', null, {});
  },
};
