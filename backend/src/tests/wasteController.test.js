const request = require('supertest');
const app = require('../app'); // Importa la aplicación Express
const sequelize = require('../config/database');
const Waste = require('../models/Waste');

let server;

beforeAll(async () => {
    await sequelize.sync({ force: true });
    server = app.listen(); // Inicia el servidor
});

afterAll(async () => {
    await sequelize.close();
    server.close(); // Cierra el servidor
});

describe('POST /api/waste', () => {
    it('should create a new waste entry', async () => {
        const response = await request(app)
            .post('/api/waste')
            .send({ type: 'Plastic', collectionDay: 'Monday' });
        expect(response.status).toBe(201);
        expect(response.body.type).toBe('Plastic');
        expect(response.body.collectionDay).toBe('Monday');
    });
});

describe('GET /api/waste', () => {
    beforeEach(async () => {
        await Waste.destroy({ where: {} }); // Limpia la tabla de residuos antes de cada prueba
    });

    it('should return all waste entries', async () => {
        await request(app)
            .post('/api/waste')
            .send({ type: 'Plastic', collectionDay: 'Monday' });
        const response = await request(app).get('/api/waste');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].type).toBe('Plastic');
    });
});