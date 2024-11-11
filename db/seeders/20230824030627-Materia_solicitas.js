'use strict';
/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    const materia1 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '11' `,
      `SELECT id FROM "Equivalencia" WHERE id = '1' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada1 = materia1[0].id;

    const materia2 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '10' `,
      `SELECT id FROM "Equivalencia" WHERE id = '2' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada2 = materia2[0].id;

    const materia3 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '14' `,
      `SELECT id FROM "Equivalencia" WHERE id = '3' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada3 = materia3[0].id;

    const materia4 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '15' `,
      `SELECT id FROM "Equivalencia" WHERE id = '4' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada4 = materia4[0].id;

    const materia5 = await queryInterface.sequelize.query(
      //`SELECT id FROM "Equivalencia" WHERE id_equivalencia = '12' `,
      `SELECT id FROM "Equivalencia" WHERE id = '5' `,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const matsolicitada5 = materia5[0].id;

    await queryInterface.bulkInsert('Materia_solicitada', [
      {
        id: 1,
        nombre: 'Introducción a la Programación',
        carrera: 'Tecnicatura en informatica',
        estado: 'pendiente',
        EquivalenciumId: matsolicitada1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 2,
        nombre: 'Gramatica 1',
        carrera: 'Profesorado de Ingles',
        estado: 'pendiente',
        EquivalenciumId: matsolicitada2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 3,
        nombre: 'Biologia General',
        carrera: 'Lic. en Biotecnologia',
        estado: 'pendiente',
        EquivalenciumId: matsolicitada3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 4,
        nombre: 'Pedagogía I',
        carrera: 'Lic. en Educacion',
        estado: 'pendiente',
        EquivalenciumId: matsolicitada4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 5,
        nombre: 'Metalurgia l',
        carrera: 'Tec. en Metalurgica',
        estado: 'pendiente',
        EquivalenciumId: matsolicitada5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Materia_solicitada', null, {});
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Función para obtener un id de la tabla "Equivalencia"
    const obtenerMateriaId = async (id) => {
      const resultado = await queryInterface.sequelize.query(
        `SELECT id FROM "Equivalencia" WHERE id = :id`,
        {
          replacements: { id },
          type: queryInterface.sequelize.QueryTypes.SELECT,
        }
      );

      // Verificar si se encontró el resultado
      if (resultado.length === 0) {
        throw new Error(`No se encontró la materia con id ${id}`);
      }

      return resultado[0].id;
    };

    try {
      const matsolicitada1 = await obtenerMateriaId(1);
      const matsolicitada2 = await obtenerMateriaId(2);
      const matsolicitada3 = await obtenerMateriaId(3);
      const matsolicitada4 = await obtenerMateriaId(4);
      const matsolicitada5 = await obtenerMateriaId(5);

      await queryInterface.bulkInsert('Materia_solicitada', [
        {
          id: 1,
          nombre: 'Introducción a la Programación',
          carrera: 'Tecnicatura en informatica',
          estado: 'pendiente',
          EquivalenciumId: matsolicitada1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          nombre: 'Gramatica 1',
          carrera: 'Profesorado de Ingles',
          estado: 'pendiente',
          EquivalenciumId: matsolicitada2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          nombre: 'Biologia General',
          carrera: 'Lic. en Biotecnologia',
          estado: 'pendiente',
          EquivalenciumId: matsolicitada3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          nombre: 'Pedagogía I',
          carrera: 'Lic. en Educacion',
          estado: 'pendiente',
          EquivalenciumId: matsolicitada4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          nombre: 'Metalurgia l',
          carrera: 'Tec. en Metalurgica',
          estado: 'pendiente',
          EquivalenciumId: matsolicitada5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (error) {
      console.error(
        'Error al obtener las materias o insertar registros:',
        error.message
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Materia_solicitada', null, {});
  },
};
