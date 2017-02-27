var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../index');
var should = chai.should();

chai.use(chaiHttp);


describe('Methods', function() {
    it('shoul have a get method', function (done) {
        chai.request(server)
            .get("/")
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });

    it('shoul have a get method', function (done) {
        chai.request(server)
            .get("/products")
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                done();
            });
    });

    it('should have a post Method', function (done) {
        chai.request(server)
            .post("/products")
            .send({"id" : 1})
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                done();
            });
    });

    it('should have a put Method', function (done) {
        chai.request(server)
            .put("/product/1")
            .send({"data" : 1})
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                done();
            });
    });

    it('should have a put Method', function (done) {
        chai.request(server)
            .delete("/product/1")
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                done();
            });
    });
    /*
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
    */
});