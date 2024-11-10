'use strict';

// me inspiré en
// https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // en que tabla
      'Equivalencia',
      // nombre de la columna
      'UsuarioId',
      // detalles de la columna nueva
      {
        // tipo
        type: Sequelize.INTEGER,
        // a que otra tabla referencia (porque es una FK)
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        // que pasa cuando se modifica o borra el id de producto, con la FK
        onUpdate: 'CASCADE',
        onDelete: '',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      // en que tabla
      'Equivalencia',
      // nombre de la columna
      'UsuarioId'
    );
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Equivalencia');

    // Verificar si la columna "UsuarioId" ya existe
    if (!tableDescription.UsuarioId) {
      await queryInterface.addColumn('Equivalencia', 'UsuarioId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }

    // Verificar duplicaciones y luego insertar solo si no existen
    const existingData = await queryInterface.sequelize.query(
      `SELECT * FROM "Equivalencia" WHERE "UsuarioId" = 1 AND "CarreraId" = 1`,
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );

    // Insertar solo si no existen duplicados
    if (existingData.length === 0) {
      await queryInterface.bulkInsert('Equivalencia', [
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingenieria en sistemas en equivalencia',
          observaciones: 'falta analitico',
          UsuarioId: 1, // Usa el id del usuario correspondiente
          CarreraId: 1, // Usa el id de la carrera correspondiente
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('El registro ya existe en la tabla "Equivalencia"');
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Equivalencia', 'UsuarioId');
  },
};
