



module.exports = function(app,db) {

    app.get('/', (req,res) => {
        res.send({data: 'yellow world'})
    })

}