exports.paginaInicial = (req, res) =>{
    res.render('index');//não presisa da extensão 'ejs' ou index.ejs
};

exports.trataPost = (req, res) =>{
// res.send('sou sua nova rota de Post');
res.send(`seu nome completo é ${req.body.nome} ${req.body.sobrenome}`);
};