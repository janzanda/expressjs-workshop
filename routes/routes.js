



const auth = (req, res, next) => {

    console.log('AUTH')
    next();

}


const func2 = (req, res, next) => {

    console.log('FUNC 2')

    next()

}


module.exports = function(app,db) {

    app.get('/', (req,res) => {
        res.send({data: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa'})
    })

    app.post('/register', (req, res) => {
        console.log(req.body)
       
        db.db().collection('test').insert(req.body);

        res.sendStatus(201);
    });


    app.post('/data', (req, res, next) =>{
        console.log(req.body.user)
        db.db().collection('test').findOne({login: {$eq: req.body.user.login}}, (err, result) => {
            console.log(result);
            if(result) {
                if(result.password !== req.body.user.password) {
                    console.log('Login Failed')
                     res.sendStatus(401);
                }
                else { 
                    console.log('Login OK');
                    next();
                }
            }
            res.sendStatus(401);
        });
    }, 
    (req, res) => {

        res.send({result: 'success'});

    })
    

}