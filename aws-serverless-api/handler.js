'use strict';
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2019-11-21' });
const { uuid } = require('uuidv4');

const leadsTable = process.env.LEADS_TABLE;

// Criar uma response
function response(statusCode, message) {
  return {
    statusCode: statusCode,
	headers: {
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE"
        },
    body: JSON.stringify(message)
  };
}
function sortByDate(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else return 1;
}
// Criar um lead
module.exports.createLead = (event, context, callback) => {
  const reqBody = JSON.parse(event.body);

//  if (
//    !reqBody.nome ||
//    reqBody.nome.trim() === '' ||
//    !reqBody.telefone ||
//    reqBody.telefone.trim() === '' ||
//    !reqBody.email ||
//    reqBody.email.trim() === ''
//  ) {
//    return callback(
//      null,
//      response(400, {
//        error: 'Algum dos campos foi enviado vazio'
//      })
//    );
//  }

  const lead = {
    id: uuid(),
    createdAt: new Date().toISOString(),
    nome: reqBody.nome,
    telefone: reqBody.telefone,
    email: reqBody.email,
    isClient: false
  };

  return db
    .put({
      TableName: leadsTable,
      Item: lead
    })
    .promise()
    .then(() => {
      callback(null, response(201, lead));
    })
    .catch((err) => response(null, response(err.statusCode, err)));
};
// Get leads
module.exports.getLeads = (event, context, callback) => {
  return db
    .scan({
      TableName: leadsTable
    })
    .promise()
    .then((res) => {
      callback(null, response(200, res.Items.sort(sortByDate)));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};
// Update lead
module.exports.updateLead = (event, context, callback) => {
  const id = event.pathParameters.id;
  const reqBody = JSON.parse(event.body);
  const { nome, telefone, email, isClient } = reqBody;

  const params = {
    Key: {
      id: id
    },
    TableName: leadsTable,
    ConditionExpression: 'attribute_exists(id)',
    UpdateExpression: 'SET nome = :nome, telefone = :telefone, email = :email, isClient = :isClient',
    ExpressionAttributeValues: {
      ':nome': nome,
      ':telefone': telefone,
      ':email': email,
      ':isClient': isClient,
    },
    ReturnValues: 'ALL_NEW'
  };
  console.log('Updating');

  return db
    .update(params)
    .promise()
    .then((res) => {
      console.log(res);
      callback(null, response(200, res.Attributes));
    })
    .catch((err) => callback(null, response(err.statusCode, err)));
};
// Delete um lead
module.exports.deleteLead = (event, context, callback) => {
  const id = event.pathParameters.id;
  const params = {
    Key: {
      id: id
    },
    TableName: leadsTable
  };
  return db
    .delete(params)
    .promise()
    .then(() =>
      callback(null, response(200, { message: 'Lead deletado com sucesso' }))
    )
    .catch((err) => callback(null, response(err.statusCode, err)));
};