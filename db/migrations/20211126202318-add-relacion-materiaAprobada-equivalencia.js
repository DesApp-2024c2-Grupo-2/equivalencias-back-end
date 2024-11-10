'use strict';

// me inspiré en
// https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // en que tabla
      'Materia_aprobada',
      // nombre de la columna
      'EquivalenciumId',
      // detalles de la columna nueva
      {
        // tipo
        type: Sequelize.INTEGER,
        // a que otra tabla referencia (porque es una FK)
        references: {
          model: 'Equivalencia',
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
      'Materia_aprobada',
      // nombre de la columna
      'EquivalenciumId'
    );
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Nombre de la tabla
      'Materia_aprobada',
      // Nombre de la columna nueva
      'EquivalenciumId',
      // Detalles de la columna nueva
      {
        // Tipo de datos
        type: Sequelize.INTEGER,
        // Referencia a otra tabla porque es una FK
        references: {
          model: 'Equivalencia',
          key: 'id',
        },
        // Qué pasa cuando se actualiza el id en la tabla referenciada
        onUpdate: 'CASCADE',
        // Qué pasa cuando se elimina el id en la tabla referenciada
        onDelete: 'SET NULL', // Puedes cambiar a 'CASCADE' si deseas eliminar registros dependientes
        allowNull: true, // Permitir valores NULL en caso de que no se pueda establecer la relación
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      // Nombre de la tabla
      'Materia_aprobada',
      // Nombre de la columna que se elimina
      'EquivalenciumId'
    );
  },
};
