const request = require('supertest');
const path = require('path');
const server = 'http://localhost:3000';

//testing route integration
describe('/search', () => {
    describe('POST', () => {
        it('respondes with 200 status and application/json content', () => {
            const search= {
                    location: '12345',
                    radius: '5 miles',
                    categories: ['Art Galleries','Bars']
                }
            
            return request(server)
            .post('/search')
            .send(search)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        })
        
        it('responds to invalid request with 404 status and error message in body', () => request(server)
        .post('/search')
        )
    
    })}
)
