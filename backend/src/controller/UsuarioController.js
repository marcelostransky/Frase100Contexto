const connection = require('../dataBase/connection');
const crypto = require("crypto");
module.exports = {
    async create(request, response)
    {
        const {des_login,  des_senha, des_nome} = request.body;
        const [count] = await connection('tb_usuario')
        .where('des_login',des_login)
        .count('cod_usuario').as('count');
    
        if(count['']>0){
            return response.status(401).json({error:`Telefone informado, ${des_login} , já esta cadastrado no sistema`})
        }
        const DADOS_CRIPTOGRAFAR = {
            algoritmo : "aes256",
            segredo : "G@lo 13 Info Tex",
            tipo : "hex"
        }
        var senhaCriptografada1 = crypto.createHash("sha256").update(des_senha).digest("hex");
        const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
        cipher.update(des_senha);
         
        const senhaCriptografada = cipher.final(DADOS_CRIPTOGRAFAR.tipo);
        
        

      const [cod_usuario] =  await connection('tb_usuario')
      .returning('cod_usuario')
      .insert({
            des_login,
            des_senha:senhaCriptografada,
            des_nome
         })

        return response.json(cod_usuario);
    }, 
    async index(request,response){
        const {page = 1 } = request.query;
        const [count] = await connection('tb_usuario').count('cod_usuario');
        console.log(request.query);
        console.log(page);
        const usuarios = await  connection('tb_usuario')
        .limit(5)
        .offset((page - 1 ) * 5)
        .select(['cod_usuario','des_nome','des_senha'])
        .orderBy('cod_usuario');
    response.header('X-Total-Count',count['']);
    return response.json({usuarios});
    },
}