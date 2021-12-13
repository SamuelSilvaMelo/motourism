const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const sinon = require('sinon');
const server = require('../app');
const { MongoClient } = require('mongodb');
const connection = require('./mocks/connectionMock');
const { before, after } = require('mocha');
const motorhomesMock = require('./mocks/motorhomesMock');

chai.use(chaiHttp);

describe('When requesting the list of motorhomes in GET /motorhomes', () => {
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
      await connectionMock.db('Motourism').collection('motorhomes').insertMany(motorhomesMock);
    });

    afterEach(async () => {
      await connectionMock.db('Motourism').collection('motorhomes').deleteMany({});
    });

    it('Returns list with all motorhomes', async () => {
      const response = await chai.request(server).get('/motorhomes');

      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf(3);
      expect(response.body[0]).to.have.property('_id');
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('description');
      expect(response.body[0]).to.have.property('imgs');
      expect(response.body[0]).to.have.property('qualification');
      expect(response.body[0]).to.have.property('fuelConsumption');
      expect(response.body[0]).to.have.property('rating');
      expect(response.body[0]).to.have.property('dailyPrice');
    });
  });
});
