const request = require('supertest');
const app = require('../app');
const bd = require('../bd');

afterAll(() => bd.end());
describe('API /api/plans', () => {
    it('GET / should list plans', async () => {
        const res = await request(app)
            .get('/api/plans')
            .expect('Content-Type', /json/)
            .expect(200);

        
        expect(Array.isArray(res.body)).toBe(true);
    })
});