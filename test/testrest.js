let mongoose = require("mongoose");
let Contact = require('../api/models/contactsModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('/GET contacts', () => {
      it('it should GET all the contacts', (done) => {
        chai.request(server)
            .get('/contacts')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
              done();
            });
      });
  });

  describe('/POST add a contacts', () => {
      it('Post a contact', (done) => {
      	let contact = {
      		name : "Joe Tester",
      		phone: "01926 68786"
      	}
        chai.request(server)
            .post('/contacts')
            .send(contact)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
              done();
            });
      });
  });

  describe('/PUT change a contacts', () => {
      it('Put a contact', (done) => {
      	let contact = {
      		name : "Gordon Parker",
      		phone: "01926 68786"
      	}
        chai.request(server)
            .put('/contacts/5c6295901c46cf11ec7bed5a')
            .send(contact)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('name').eql('Gordon Parker');
              done();
            });
      });
  });

  describe('/Delete del a contacts', () => {
      it('Delete a contact', (done) => {
        chai.request(server)
            .delete('/contacts/5c6295901c46cf11ec7bed5a')
             .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
              done();
            });
      });
  });