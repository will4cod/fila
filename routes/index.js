var express = require('express');
var router = express.Router();
const telaPrincipal = require('../Controller/index');

/* GET home page. */
router.get('/', telaPrincipal.principal);
const series = [
    {
        id:1 ,
        nome: "friends"
    },
    {
        id:2 ,
        nome: "naruto"
    },
    {
        id:3 ,
        nome: "boku no hero"
    }
]
router.get('/serie/:id', (req,res) => {
    let {id} = req.params; 
    let [buscaserie] = series.filter( (serie) => {return serie.id == id });
    console.log(buscaserie);
    res.send(buscaserie);
});

module.exports = router;
