'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [uniOrigen] = await queryInterface.sequelize.query(
      `SELECT * FROM "Universidad_origen" WHERE sigla = 'UTN';`
    );

    if (uniOrigen.length === 0) {
      await queryInterface.bulkInsert('Universidad_origen', [
        {
          nombre_universidad: 'Universidad Tecnológica Nacional',
          localidad: 'Haedo',
          sigla: 'UTN',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad de Buenos Aires',
          localidad: 'CABA',
          sigla: 'UBA',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad de la Matanza',
          localidad: 'San Justo',
          sigla: 'UNLaM',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad Nacional de San Martin',
          localidad: 'San Martin',
          sigla: 'UNSAM',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad Nacional de La Plata',
          localidad: 'San Martin',
          sigla: 'UNLP',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad de Morón',
          localidad: 'Moron',
          sigla: 'UM',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Instituto tecnologico de Buenos Aires',
          localidad: 'CABA',
          sigla: 'ITBA',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Universidad del Salvador',
          localidad: 'CABA',
          sigla: 'USL',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_universidad: 'Instituto Don Torcuato Di Tella',
          localidad: 'CABA',
          sigla: 'ITDT',
          disabled: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } else {
      console.log('El registro ya existe. No se insertó.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Universidad_origen', null, {});
  },
};
