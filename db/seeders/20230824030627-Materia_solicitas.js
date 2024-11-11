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
      return resultado.length > 0 ? resultado[0].id : null;
    };

    try {
      // Intentar obtener las IDs de las materias solicitadas
      const idsEquivalencia = [];
      for (let id = 284; id <= 288; id++) {
        const materiaId = await obtenerMateriaId(id);
        if (materiaId) {
          idsEquivalencia.push(materiaId);
        } else {
          console.warn(`Advertencia: No se encontró la materia con id ${id}`);
        }
      }

      // Crear los registros solo para las IDs que se encontraron
      const registrosParaInsertar = idsEquivalencia.map((materiaId, index) => {
        return {
          nombre: [
            'Introducción a la Programación',
            'Gramatica 1',
            'Biologia General',
            'Pedagogía I',
            'Metalurgia l',
          ][index],
          carrera: [
            'Tecnicatura en informatica',
            'Profesorado de Ingles',
            'Lic. en Biotecnologia',
            'Lic. en Educacion',
            'Tec. en Metalurgica',
          ][index],
          estado: 'pendiente',
          EquivalenciumId: materiaId,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });

      // Verificar si los registros ya existen antes de insertar
      for (const registro of registrosParaInsertar) {
        const existe = await queryInterface.sequelize.query(
          `SELECT COUNT(*) FROM "Materia_solicitada" WHERE "nombre" = :nombre AND "carrera" = :carrera AND "EquivalenciumId" = :EquivalenciumId`,
          {
            replacements: {
              nombre: registro.nombre,
              carrera: registro.carrera,
              EquivalenciumId: registro.EquivalenciumId,
            },
            type: queryInterface.sequelize.QueryTypes.SELECT,
          }
        );

        // Insertar solo si no existe el registro
        if (existe[0].count == 0) {
          await queryInterface.bulkInsert('Materia_solicitada', [registro]);
        }
      }

      console.log('Registros insertados correctamente, sin duplicados.');
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
