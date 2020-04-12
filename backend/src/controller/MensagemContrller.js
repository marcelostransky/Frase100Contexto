const connection = require('../dataBase/connection');

module.exports = {

    async index(request,response){
        const {page = 1 } = request.query;
        const [count] = await connection('tb_frase_contexto').count('id');
        console.log(request.query);
        console.log(page);
        const mensagens = await  connection('tb_frase_contexto')
        .limit(5)
        .offset((page - 1 ) * 5)
        .select(['id','Autor','Mensagem','Data'])
        .orderBy('id');
    response.header('X-Total-Count',count['']);
    return response.json({mensagens});
    },
    async create(request, response)
    {
        const {autor,  mensagem} = request.body;
        const ong_id =  request.headers.authorization;
        const [id] = await connection('tb_frase_contexto').insert({
            autor,
            mensagem,
         })
        return response.json({id});
    },
}
