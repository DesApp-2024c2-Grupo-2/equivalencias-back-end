'use strict';

// me inspiré en
// https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7

/*module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // en que tabla
      'Materia_aprobada',
      // nombre de la columna
      'UniversidadOrigenId',
      // detalles de la columna nueva
      {
        // tipo
        type: Sequelize.INTEGER,
        // a que otra tabla referencia (porque es una FK)
        references: {
          model: 'Universidad_origen',
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
      'UniversidadOrigenId'
    );
  },
};*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Describir la tabla para verificar si la columna ya existe
    const tableDescription = await queryInterface.describeTable(
      'Materia_aprobada'
    );

    // Verificar si la columna "UniversidadOrigenId" ya existe
    if (!tableDescription.UniversidadOrigenId) {
      // Agregar la columna solo si no existe
      await queryInterface.addColumn(
        'Materia_aprobada',
        'UniversidadOrigenId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Universidad_origen', // Asegúrate de que el nombre de la tabla referenciada esté correcto
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL', // Especifica la acción de borrado
          allowNull: true, // Permitir valores nulos si es necesario
        }
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Remover la columna
    return queryInterface.removeColumn(
      'Materia_aprobada',
      'UniversidadOrigenId'
    );
  },
};
