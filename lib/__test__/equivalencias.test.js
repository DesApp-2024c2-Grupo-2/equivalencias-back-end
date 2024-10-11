require('dotenv').config();
import Equivalencia from '../../lib/models/equivalencia';

const supertest = require('supertest');
const app = require('../../lib/app.js');

const api = supertest(app);

describe('Pruebas de Modelo Equivalencia', () => {
  test('El modelo debe ser definido', () => {
    expect(Equivalencia).toBeDefined();
  });
});

describe('Endpoints GET', () => {
  test('debe retornar la cantidad de equivalencias', async () => {
    const response = await api.get(`/api/materias_aprobadas/`);

    //console.log(response)
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body.data.length).toBe(5);
  });
});

/*const sequelize = new Sequelize('equivalencias', 'postgres', '3084', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

// Sincroniza la base de datos y crea las tablas
beforeAll(async () => {
  Equivalencia.init(sequelize);
  await sequelize.sync({ force: true });

  await Equivalencia.create({
  instituto: 'ninguno',
  UsuarioId: 1,
  estado: 'aceptado',
  observaciones: 'falta dni',
  })
});



//Cierra la conexión a la base
afterAll(async () => {
  await sequelize.close();
});*/
