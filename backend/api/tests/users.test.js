const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
const server = require('../app');
const { MongoClient } = require('mongodb');
const connection = require('./mocks/connectionMock');
const { before, after } = require('mocha');

chai.use(chaiHttp);

describe('When registering a new user on the POST users/ route', () => {
  describe('Check that', () => {
    let connectionMock;

    before(async () => {
      connectionMock = await connection();
      sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(() => {
      MongoClient.connect.restore();
    });

    beforeEach(async () => {
      await connectionMock.db('Motourism').collection('users').deleteMany({});
    })

    it('The "name" field is required.', async () => {
      const response = await chai.request(server).post('/users').send({
        name: '',
        email: 'trybe@betrybe.com',
        password: '1234567'
      });

      expect(response).to.have.status(400);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Invalid entries. Try again.');
    });
  
    it('The "email" field is required.', async () => {
      const response = await chai.request(server).post('/users').send({
        name: 'User-Tryber',
        email: '',
        password: '1234567'
      });

      expect(response).to.have.status(400);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Invalid entries. Try again.');
    });
  
    it('Cannot register user with invalid email field', async () => {
      const response = await chai.request(server).post('/users').send({
        name: '',
        email: 'trybebetrybe.com',
        password: '1234567'
      });

      expect(response).to.have.status(400);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Invalid entries. Try again.');
    });
  
    it('The "password" field is required.', async () => {
      const response = await chai.request(server).post('/users').send({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: ''
      });

      expect(response).to.have.status(400);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Invalid entries. Try again.');
    });
  
    it('The "email" field is unique.', async () => {
      await connectionMock.db('Motourism').collection('users').insertOne({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
        role: 'User',
      });
      
      const response = await chai.request(server).post('/users').send({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
      });

      expect(response).to.have.status(409);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Email already registered');
    });
  
    it('It is possible to register user successfully', async () => {
      const response = await chai.request(server).post('/users').send({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
      });

      expect(response).to.have.status(201);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('user');
      expect(response.body.user).to.have.property('_id');
      expect(response.body.user).to.have.property('name');
      expect(response.body.user).to.have.property('email');
      expect(response.body.user).to.have.property('role');
    });
  
    it('When registering user, the value of the "role" field has the value "user".', async () => {
      const response = await chai.request(server).post('/users').send({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
      });

      expect(response.body.user.role).to.be.equal('user');
    });
  })
});
