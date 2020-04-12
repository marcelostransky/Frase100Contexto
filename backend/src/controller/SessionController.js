const jwt = require ('jsonwebtoken');
module.exports = {
async create (request, response) { 
    const { telefone, senha } = request.body;
    const profile = {
        nome:'Marcelo',
        id:1,
        telefone,
        senha
    };
    const secr = 'Galo Doido';
    const token =  jwt.sign (profile, secr); 
    // await auth.attempt(telefone, senha)

    return response.json(token);

  }
}