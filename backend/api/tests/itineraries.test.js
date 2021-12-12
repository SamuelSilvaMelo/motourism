const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
const server = require('../app');
const { MongoClient } = require('mongodb');
const connection = require('./mocks/connectionMock');
const { before, after } = require('mocha');
const itinerariesMock = require('./mocks/itinerariesMock');

chai.use(chaiHttp);

describe('When requesting the list of itineraries in GET /itineraries', () => {
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
      await connectionMock.db('Motourism').collection('itineraries').insertOne(itinerariesMock);
    });

    afterEach(async () => {
      await connectionMock.db('Motourism').collection('itineraries').deleteMany({});
    });

    it('Returns list with itineraries', async () => {
      const response = await chai.request(server).get('/itineraries');

      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('_id');
      expect(response.body[0]).to.have.property('startCity');
      expect(response.body[0]).to.have.property('Route');
      expect(response.body[0]).to.have.property('endCity');
      expect(response.body[0]).to.have.property('imgs');
      expect(response.body[0]).to.have.property('totalDistance');
      expect(response.body[0]).to.have.property('time');
    });
  });
});
