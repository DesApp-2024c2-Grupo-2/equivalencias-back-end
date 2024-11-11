'use strict';
// me inspiré en
// https://stackoverflow.com/questions/45286429/custom-query-on-sequelize-seeder
// cambiando la notación de Promise a async/await

/*
    const materia1 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '10' `,
      `SELECT id FROM "Equivalencia" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi1 = materia1[0].id;

    const materia2 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi2 = materia2[0].id;

    const materia3 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '14' `,
      `SELECT id FROM "Equivalencia" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi3 = materia3[0].id;

    const materia4 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '15' `,
      `SELECT id FROM "Equivalencia" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi4 = materia4[0].id;

    const materia5 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    const equi5 = materia5[0].id;

    */
///////////////////////////////////////////////////
/*module.exports = {
      up: async (queryInterface, Sequelize) => {

    const universidad1 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '20' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod1 = universidad1[0].id;

    const universidad2 = await queryInterface.sequelize.query(
      //    `SELECT id FROM "Universidad_origen" WHERE codigo = '21' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod2 = universidad2[0].id;

    const universidad3 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '22' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod3 = universidad3[0].id;

    const universidad4 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '23' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod4 = universidad4[0].id;

    const universidad5 = await queryInterface.sequelize.query(
      // `SELECT id FROM "Universidad_origen" WHERE codigo = '24' `,
      `SELECT id FROM "Universidad_origen" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const cod5 = universidad5[0].id;

    await queryInterface.bulkInsert('Materia_aprobada', [
      {
        nota: 7,
        carga_horaria: 8,
        año_aprobacion: '20151003',
        nombre_materia: 'Gramática I',
        certificado: true,
        EquivalenciumId: 1,
        UniversidadOrigenId: cod1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nota: 9,
        carga_horaria: 8,
        año_aprobacion: '20151003',
        nombre_materia: 'Programacion 1',
        certificado: true,
        EquivalenciumId: 2,
        UniversidadOrigenId: cod2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nota: 7,
        carga_horaria: 6,
        año_aprobacion: '20201125',
        nombre_materia: 'Quimica General',
        certificado: false,
        EquivalenciumId: 3,
        UniversidadOrigenId: cod3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nota: 8,
        carga_horaria: 8,
        año_aprobacion: '20191120',
        nombre_materia: 'Pedagogía I',
        certificado: false,
        EquivalenciumId: 4,
        UniversidadOrigenId: cod4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nota: 9,
        carga_horaria: 8,
        año_aprobacion: '20181209',
        nombre_materia: 'Programación con Objetos I',
        certificado: true,
        EquivalenciumId: 5,
        UniversidadOrigenId: cod5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Materia_aprobada', null, {});
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Función para verificar o insertar registros en la tabla "Universidad_origen"
    const verificarOInsertarUniversidad = async (
      id,
      nombre,
      localidad,
      sigla
    ) => {
      const resultado = await queryInterface.sequelize.query(
        `SELECT id FROM "Universidad_origen" WHERE id = :id`,
        {
          replacements: { id },
          type: queryInterface.sequelize.QueryTypes.SELECT,
        }
      );

      if (resultado.length === 0) {
        console.warn(
          `No se encontró la universidad con id ${id}. Insertando...`
        );
        // Inserta el registro con el id, nombre, localidad y sigla
        await queryInterface.bulkInsert('Universidad_origen', [
          {
            id,
            nombre_universidad: nombre,
            localidad: localidad, // Añadir localidad
            sigla: sigla, // Añadir sigla
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
        return id;
      }

      return resultado[0].id;
    };

    try {
      // Verificar o insertar las universidades con el nombre, localidad y sigla
      const cod1 = await verificarOInsertarUniversidad(
        1,
        'Universidad A',
        'Ciudad A',
        'UA'
      );
      const cod2 = await verificarOInsertarUniversidad(
        2,
        'Universidad B',
        'Ciudad B',
        'UB'
      );
      const cod3 = await verificarOInsertarUniversidad(
        3,
        'Universidad C',
        'Ciudad C',
        'UC'
      );
      const cod4 = await verificarOInsertarUniversidad(
        4,
        'Universidad D',
        'Ciudad D',
        'UD'
      );
      const cod5 = await verificarOInsertarUniversidad(
        5,
        'Universidad E',
        'Ciudad E',
        'UE'
      );

      // Crear los registros para la tabla "Materia_aprobada"
      const registrosParaInsertar = [
        {
          nota: 7,
          carga_horaria: 8,
          año_aprobacion: '20151003',
          nombre_materia: 'Gramática I',
          certificado: true,
          EquivalenciumId: 1,
          UniversidadOrigenId: cod1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nota: 9,
          carga_horaria: 8,
          año_aprobacion: '20151003',
          nombre_materia: 'Programacion 1',
          certificado: true,
          EquivalenciumId: 2,
          UniversidadOrigenId: cod2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nota: 7,
          carga_horaria: 6,
          año_aprobacion: '20201125',
          nombre_materia: 'Quimica General',
          certificado: false,
          EquivalenciumId: 3,
          UniversidadOrigenId: cod3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nota: 8,
          carga_horaria: 8,
          año_aprobacion: '20191120',
          nombre_materia: 'Pedagogía I',
          certificado: false,
          EquivalenciumId: 4,
          UniversidadOrigenId: cod4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nota: 9,
          carga_horaria: 8,
          año_aprobacion: '20181209',
          nombre_materia: 'Programación con Objetos I',
          certificado: true,
          EquivalenciumId: 5,
          UniversidadOrigenId: cod5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      // Insertar los registros en "Materia_aprobada"
      await queryInterface.bulkInsert(
        'Materia_aprobada',
        registrosParaInsertar
      );
      console.log('Registros insertados correctamente.');
    } catch (error) {
      console.error(
        'Error al verificar las universidades o insertar registros:',
        error.message
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Materia_aprobada', null, {});
  },
};
