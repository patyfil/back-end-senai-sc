/**
 * Arquivo de configuração para inicialização da aplicação.
 */

// Carregue o dotenv com a senha uri
require('dotenv').config();

//Importação de pacotes/módulos para uso da aplicação
var express = require("express"); //Importação do pacote express
var app = express(); //Inicialização da aplicação 'app' pelo pacote express
var bodyParser = require("body-parser"); //Importação do pacote body-parser

/**
 * Configuração da aplicação para utilizar o pacote body-parser para retornar os dados da requisição.
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Importação do pacote cors
const cors = require("cors");

//Importação do pacote mongoose
var mongoose = require("mongoose");

//Configuração da conexão com o MongoDB no serviço cloud MongoDB Atlas
// A senha coloquei em variáveis de ambiente
//const MONGODB_URI = "mongodb+srv://usuario:senha@app-senai.2szp8xd.mongodb.net/?retryWrites=true&w=majority";

//Validação da configuração da conexão com o MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("A conexão com o MongoDB foi realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

//Importação do arquivo de modelo que irá representar a coleção 'usuario'
var Usuario = require("./modelo/usuario");

//Definição da porta do servidor da aplicação
var porta = 4000;

//Definição da varíavel router para utilizar as instâncias das rotas do pacote express
var router = express.Router();

//Configuração do pacote cors para autorizar requisições de todas as origens
app.use(cors());

//Definição do middleware para acessar as solicitações enviadas à API
router.use(function (req, res, next) {
  console.log("Acesso à primeira camada do middleware...");
  //Definição do site de origem que tem permissão de realizar a conexão com a API
  //O "*" indicado que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Definição dos métodos permitidos pela conexão durante o acesso à API
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  app.use(cors());
  next();
});

//Rota para exibir uma mensagem ao usuário
//Acesso: GET https://6cl7pw-4000.csb.app
app.get("/", (req, res) => {
  res.send("Olá mundo! Esta é a página inicial da nossa aplicação.");
});

/*
 * Rota padrão para verificação do funcionamento da aplicação
 * Acesso GET: https://6cl7pw-4000.csb.app/api
 */
router.get("/", function (req, res) {
  res.json({
    message: "Olá mundo! Está é a nossa API desenvolvida em Node.js.",
  });
});

//Rotas terminadas em '/usuarios' (rotas para os verbos GET e POST)
router
  .route("/usuarios")

  /*
   * Método POST: cadastrar um usuário
   * Acesso: POST https://6cl7pw-4000.csb.app/api/usuarios
   */
  .post(function (req, res) {
    var usuario = new Usuario();
    //Definição dos campos que fazem parte da solicitação
    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;

    usuario
      .save()
      .then(() => {
        res.json({ message: "Usuário cadastrado com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  })

  /*
   * Método GET: retornar a listagem de todos os usuários
   * Acesso: GET https://6cl7pw-4000.csb.app/api/usuarios/
   */
  .get(function (req, res) {
    Usuario.find()
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });

//Rotas terminadas em '/usuarios/:usuario_id' (rotas para os verbos GET, PUT e DELETE)
router
  .route("/usuarios/:usuario_id")

  /*
   * Método GET: listar as informações de um usuário específico
   * Exemplo: GET https://6cl7pw-4000.csb.app/api/usuarios/usuario_id
   * Acesso: GET https://6cl7pw-4000.csb.app/api/usuarios/651359f5ff6a73d858a258a5
   */
  .get(async function (req, res) {
    try {
      const usuario = await Usuario.findById(req.params.usuario_id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).send(error);
    }
  })

  /*
   * Método PUT: atualizar as informações de um usuário específico
   * Acesso: PUT https://6cl7pw-4000.csb.app/api/usuarios/usuario_id
   */
  .put(async function (req, res) {
    try {
      const usuario = await Usuario.findById(req.params.usuario_id);

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Atualiza os dados do usuário com base na solicitação
      usuario.nome = req.body.nome;
      usuario.login = req.body.login;
      usuario.senha = req.body.senha;

      await usuario.save();

      res.json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      res.status(500).send(error);
    }
  })

  /*
   * Método DELETE: deletar um usuário específico
   * Acesso: DELETE https://6cl7pw-4000.csb.app/api/usuarios/usuario_id
   */
  .delete(async function (req, res) {
    try {
      const result = await Usuario.deleteOne({ _id: req.params.usuario_id });
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      res.json({ message: "Usuário excluído com sucesso!" });
    } catch (error) {
      res.status(500).send(error);
    }
  });

//Inicialização do servidor da aplicação
app.listen(porta, function () {
  console.log("Iniciando a aplicação na porta " + porta);
});

// Definição de uma rota com prefixo '/api' para todas as rotas
app.use("/api", router);
