const   express = require('express'),
        router = express.Router(),
        Aluno = require('../models/aluno');

router.get('/', (req, res) => {
    Aluno.find({}, function(err, allAlunos){
		if(err){
			console.log(err);
		} else {
			res.render("landing", {alunos:allAlunos}); //our campgrounds var
		}
	});
});

router.post('/', (req, res)=>{
    let nome = req.body.nome;
    let newAluno = {nome: nome};
    Aluno.create(newAluno, (err, newlyCreated)=>{
        if (err) {console.log(err)} else {console.log(newlyCreated);res.redirect("/");}
    });
});
module.exports = router;