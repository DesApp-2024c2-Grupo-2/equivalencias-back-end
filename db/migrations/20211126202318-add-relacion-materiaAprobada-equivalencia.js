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
    // Describir la tabla para verificar si la columna ya existe
    const tableDescription = await queryInterface.describeTable(
      'Materia_aprobada'
    );

    // Verificar si la columna "EquivalenciumId" ya existe
    if (!tableDescription.EquivalenciumId) {
      await queryInterface.addColumn('Materia_aprobada', 'EquivalenciumId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Equivalencia',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // Deja 'SET NULL' en lugar de vacío
        allowNull: true, // Permitir valores nulos si es necesario
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Materia_aprobada', 'EquivalenciumId');
  },
};
