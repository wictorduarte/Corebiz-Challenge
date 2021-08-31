# Desafio Final Hiring Coders 2021<br>Grupo 30 - Corebiz

<div><img src="https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/64898951_1311371512350085_3889026250110402560_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeG3Z1gxHmm2L8WYr0kjKsVncKq6DU8uVLNwqroNTy5Us1GqwCmM-CnrrcvLWpxTorMRLZs8sUVUfqnfg41xcbE4&_nc_ohc=bWSSVppxbp0AX8TT72H&_nc_ht=scontent.frec31-1.fna&oh=71ef3c5f50c1de321941175cf6219cd7&oe=6153F13C" />
</div>

## Índice

<ul>
    <li><a href="#sobre">Sobre o Projeto</a></li>
    <li><a href="#instrucoes">Instruções para a execução</a></li>
    <li><a href="#linkrepo">Repositório do Projeto</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#aws">Corebiz AWS API</a></li>
    <li><a href="#tecnologias">Tecnologias usadas</a></li>
    <li><a href="#equipe">Equipe</a></li>
</ul>

<div id="sobre"></div>

## Sobre o Projeto
- Projeto desenvolvido para o desafio final do programa Hiring Coders da VTEX em parceria com a Gama Academy.
- Criar uma API para servir os projetos e pedidos vendidos com base na API VTEX IO.
- Criar uma API utlizando AWS API Gateway para gerenciar o cadastro de leads, os prospectos, e a venda ativa da loja, os clientes.
- Desenvolver uma loja virtual utilizando os blocos da plataforma VTEX IO e/ou blocos customizados com base na temática assignada.

<div id="instrucoes"></div>

## Instruções para a execução

### Configuração inicial
Para executar o projeto siga as [instruções do guia da plataforma VTEX IO](https://learn.vtex.com/docs/course-basic-blocks-step00setup-lang-pt) para instalar o GIT, Toolbelt e acessar o workspace da sua conta VTEX.

### Como executar o projeto
- Clone o [repositório](https://github.com/wictorduarte/Corebiz-Challenge).
- Desde a raiz do projeto, acesse as pastas a seguir e execute o comando `yarn`:
-- `/leadform`
-- `/leadform/react`
-- `/react`
- Desde a raiz do projeto ou `root`, acesse a pasta `/leadform` e execute o comando `vtex link` em um terminal para conectar o componente ao ambiente.
- Quando finalizado e desde outro terminal, acesse a pasta raiz ou `root` e execute o comando `vtex link` para conectar o projeto ao ambiente.
- Acesse o workspace a partir do link que poderá ser gerado substituindo `{workspace}` e `{conta}` com o nome do seu workspace e conta no seguinte template `https://{workspace}--{conta}.myvtex.com`.

<div id="linkrepo"></div>

## Repositório do Projeto
- [https://github.com/wictorduarte/Corebiz-Challenge](https://github.com/wictorduarte/Corebiz-Challenge)
- [https://github.com/VINICIUSBERAMATOS/grp30-api-aws-serverless](https://github.com/VINICIUSBERAMATOS/grp30-api-aws-serverless)
- O service da VTEX API está na pasta `/services`.

<div id="features"></div>

## Features
- Captação de Leads.
- Gerenciamento de Leads: Prospectos e Clientes.
- Loja de compras virtual.
- Carrinho de produtos.

<div id="aws"></div>

## Corebiz AWS API

## Instalar serverless framework

```zsh
npm install -g serverless
```

MacOS/Linux

```zsh
sudo npm install -g serverless
```

## Instalar dependências

```zsh
npm install aws-sdk
npm install uuidv4
```

## Verificar versão e instalação

```zsh
serverless
serverless --version
```

## Configurar IAM credentials em AWS

1. Procurar por IAM em AWS Services
2. Entrar em Usuários
3. Adicionar novo usuário
4. User name => serverless
5. Click em acesso programático
6. Next
7. Attach policy => AdministratorAccess
8. Next
9. Criar usuário

```zsh
serverless config credentials --provider aws --key {Access Key ID} --secret {Access Secret}
```

## Criar projeto e boilerplate

```zsh
mkdir {nome_do_projeto}
cd {nome_do_projeto}
sls create -t aws-nodejs
```

## Deploy

```zsh
sls deploy
```

## Endpoints da API

POST - https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads <br>
GET - https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads <br>
PUT - https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads/{id} <br>
DELETE - https://se3l85r4x5.execute-api.us-east-2.amazonaws.com/dev/leads/{id} <br>

## CORS
Configurado o CORS nos headers das requisições no arquivo handler.js
```js
headers: {
"Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
}
```

<div id="tecnologias"></div>

## Tecnologias usadas

<div style="display: inline_block">
    <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
    <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
    <img align="center" alt="JS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
    <img align="center" alt="VTEX" height="30" width="59" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1200px-VTEX_Logo.svg.png"/>
    <img align="center" alt="AWS" height="30" width="40" style="filter:invert(1);" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
</div>

<div id="equipe"></div>

## Equipe
- Ana Silvia Nazar Luna
- Carlos Augusto de Araújo Alves
- Davi Freire da Silva
- Lika Oyama
- Luciano Pastine
- Luísa Garrozi de Oliveira
- Luiz Cruz
- Luiz Otávio Lima Falcão
- Monique Trotta Ossola Cordeiro
- Vinícius Beritica de Arêa Matos
- Wictor Duarte
