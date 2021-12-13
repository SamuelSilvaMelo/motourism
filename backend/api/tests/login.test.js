const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
const server = require('../app');
const { MongoClient } = require('mongodb');
const connection = require('./mocks/connectionMock');
const { before, after } = require('mocha');

chai.use(chaiHttp);

describe('When logging a user into the POST login/ route', () => {
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
    });

    it('The "email" field is required.', async () => {
      const response = await chai.request(server).post('/login').send({
        email: '',
        password: '1234567',
      });

      expect(response).to.have.status(401);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'All fields must be filled');
    });
  
    it('The "password" field is required.', async () => {
      const response = await chai.request(server).post('/login').send({
        email: 'trybe@betrybe.com',
        password: '',
      });

      expect(response).to.have.status(401);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'All fields must be filled');
    });
  
    it('Cannot login with invalid email', async () => {
      await connectionMock.db('Motourism').collection('users').insertOne({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
      });

      const response = await chai.request(server).post('/login').send({
        email: 'trybebetrybe.com',
        password: '1234567',
      });

      expect(response).to.have.status(401);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Incorrect username or password');
    });
  
    it('Cannot login with an invalid password', async () => {
      await connectionMock.db('Motourism').collection('users').insertOne({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
        role: 'user',
      });

      const response = await chai.request(server).post('/login').send({
        email: 'trybe@betrybe.com',
        password: '12345678',
      });

      expect(response).to.have.status(401);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('message', 'Incorrect username or password');
    });
  
    it('It is possible to login successfully', async () => {
      await connectionMock.db('Motourism').collection('users').insertOne({
        name: 'User-Tryber',
        email: 'trybe@betrybe.com',
        password: '1234567',
        role: 'user',
      });

      const response = await chai.request(server).post('/login').send({
        email: 'trybe@betrybe.com',
        password: '1234567',
      });

      expect(response).to.have.status(200);
      expect(response.body).to.be.a('object');
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.not.be.empty;
    });
  })
});
