const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../app');


chai.use(chaiHttp);

let token, movieID;

describe('/api/movies tests', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({ username: 'ftoker12', password: '123456' })
            .end((err,res) => {
                token = res.body.token;
                console.log(token);
                done();
            });
        });

        describe('/POST movie', () => {
            it('abc', (done) => {
                
                    const movie = {
                        title: 'Udemy',
                        director_id: '6173f0fd9637a32811c19dd4',
                        category: 'Komedi',
                        country: 'Türkiye',
                        year: 1950,
                        imdb_score: 8
                    }
                    chai.request(server)
                        .post('/api/movies')
                        .send(movie)
                        .set('x-access-token', token)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('title');
                            res.body.should.have.property('director_id');
                            res.body.should.have.property('category');
                            res.body.should.have.property('country');
                            res.body.should.have.property('year');
                            res.body.should.have.property('imdb_score');
                            movieID = res.body._id;
                            done();
                        });
                
                
            });
            
        });

  /*  describe('/GET movies', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('api/movies')
                .set('x-access-token', token)
                .end((err, res) => {
                    
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    */

    describe('/GET/:director_id movie', () => {
        it('it should GET a movie by the given id', (done) => {
            chai.request(server)
                .get('/api/movie/' + movieID)
                .set('x-access-token',token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('director_id');
                    res.body.should.have.property('category');
                    res.body.should.have.property('country');
                    res.body.should.have.property('year');
                    res.body.should.have.property('imdb_score');
                    res.body.should.have.property('_id').eql(movieID);
                    done();
                });
        })
    })
});
