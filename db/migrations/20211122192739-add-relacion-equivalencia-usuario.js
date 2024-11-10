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
    // Describir la tabla para verificar si la columna ya existe
    const tableDescription = await queryInterface.describeTable('Equivalencia');

    // Agregar la columna "UsuarioId" solo si no existe
    if (!tableDescription.UsuarioId) {
      await queryInterface.addColumn('Equivalencia', 'UsuarioId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios', // Referencia a la tabla 'Usuarios'
          key: 'id', // Columna de referencia en 'Usuarios'
        },
        onUpdate: 'CASCADE', // Actualizar en cascada
        onDelete: 'SET NULL', // Poner en NULL si se elimina
        allowNull: true, // Permitir valores NULL para evitar errores
      });
    }

    // Evitar insertar datos duplicados
    const [
      existingData,
    ] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) AS count FROM "Equivalencia" WHERE "instituto" = 'Untref' AND "estado" = 'pendiente' AND "carrera" = 'Ingeniería en sistemas en equivalencia' AND "observaciones" = 'falta analítico' AND "UsuarioId" = 1 AND "CarreraId" = 1`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    // Solo insertar si no hay duplicados
    if (existingData.count === 0) {
      await queryInterface.bulkInsert('Equivalencia', [
        {
          instituto: 'Untref',
          estado: 'pendiente',
          carrera: 'Ingeniería en sistemas en equivalencia',
          observaciones: 'falta analítico',
          UsuarioId: 1, // ID de usuario específico
          CarreraId: 1, // ID de carrera específica
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('El registro ya existe en la tabla "Equivalencia"');
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna "UsuarioId" al deshacer la migración
    await queryInterface.removeColumn('Equivalencia', 'UsuarioId');
  },
};
