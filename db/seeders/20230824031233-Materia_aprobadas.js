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
        await queryInterface.bulkInsert('Universidad_origen', [
          {
            id,
            nombre_universidad: nombre,
            localidad: localidad,
            sigla: sigla,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
        return id;
      }

      return resultado[0].id;
    };

    // Función para insertar los registros de "Equivalencia"
    const insertarEquivalencia = async (id, nombre) => {
      const resultado = await queryInterface.sequelize.query(
        `SELECT id FROM "Equivalencia" WHERE id = :id`, // Cambié "Equivalencium" por "Equivalencia"
        {
          replacements: { id },
          type: queryInterface.sequelize.QueryTypes.SELECT,
        }
      );

      if (resultado.length === 0) {
        console.warn(
          `No se encontró el equivalente con id ${id}. Insertando...`
        );
        await queryInterface.bulkInsert('Equivalencia', [
          // Cambié "Equivalencium" por "Equivalencia"
          {
            id,
            nombre: nombre,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
        return id;
      }

      return resultado[0].id;
    };

    try {
      // Asegurarse de que la tabla "Equivalencia" existe antes de insertar datos
      const tablas = await queryInterface.sequelize.query(
        `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`,
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      );

      if (!tablas.some((table) => table.table_name === 'Equivalencia')) {
        // Cambié "Equivalencium" por "Equivalencia"
        throw new Error(
          'La tabla "Equivalencia" no existe en la base de datos.' // Cambié "Equivalencium" por "Equivalencia"
        );
      }

      // Insertar los equivalentes
      const equi1 = await insertarEquivalencia(1, 'Equivalente A'); // Cambié "Equivalencium" por "Equivalencia"
      const equi2 = await insertarEquivalencia(2, 'Equivalente B'); // Cambié "Equivalencium" por "Equivalencia"
      const equi3 = await insertarEquivalencia(3, 'Equivalente C'); // Cambié "Equivalencium" por "Equivalencia"
      const equi4 = await insertarEquivalencia(4, 'Equivalente D'); // Cambié "Equivalencium" por "Equivalencia"
      const equi5 = await insertarEquivalencia(5, 'Equivalente E'); // Cambié "Equivalencium" por "Equivalencia"

      // Insertar universidades
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
          EquivalenciaId: equi1, // Cambié "EquivalenciumId" por "EquivalenciaId"
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
          EquivalenciaId: equi2, // Cambié "EquivalenciumId" por "EquivalenciaId"
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
          EquivalenciaId: equi3, // Cambié "EquivalenciumId" por "EquivalenciaId"
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
          EquivalenciaId: equi4, // Cambié "EquivalenciumId" por "EquivalenciaId"
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
          EquivalenciaId: equi5, // Cambié "EquivalenciumId" por "EquivalenciaId"
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
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtener los ids de las universidades
    const universidades = await queryInterface.sequelize.query(
      `
      SELECT id FROM "Universidad_origen" WHERE id IN (1, 2, 3, 4, 5)
    `,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Obtener los ids de la tabla "Equivalencia"
    const equivalencias = await queryInterface.sequelize.query(
      `
      SELECT id FROM "Equivalencia" WHERE id IN (1, 2, 3, 4, 5)
    `,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (universidades.length < 5 || equivalencias.length < 5) {
      throw new Error('Faltan universidades o equivalencias necesarias');
    }

    const cod1 = universidades.find((u) => u.id === 1).id;
    const cod2 = universidades.find((u) => u.id === 2).id;
    const cod3 = universidades.find((u) => u.id === 3).id;
    const cod4 = universidades.find((u) => u.id === 4).id;
    const cod5 = universidades.find((u) => u.id === 5).id;

    const eq1 = equivalencias.find((e) => e.id === 1).id;
    const eq2 = equivalencias.find((e) => e.id === 2).id;
    const eq3 = equivalencias.find((e) => e.id === 3).id;
    const eq4 = equivalencias.find((e) => e.id === 4).id;
    const eq5 = equivalencias.find((e) => e.id === 5).id;

    await queryInterface.bulkInsert('Materia_aprobada', [
      {
        nota: 7,
        carga_horaria: 8,
        año_aprobacion: '20151003',
        nombre_materia: 'Gramática I',
        certificado: true,
        EquivalenciumId: eq1,
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
        EquivalenciumId: eq2,
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
        EquivalenciumId: eq3,
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
        EquivalenciumId: eq4,
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
        EquivalenciumId: eq5,
        UniversidadOrigenId: cod5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Materia_aprobada', null, {});
  },
};
