"use strict";

const getDynamoDB = require("aws-sdk");

const addTodo = async (event) => {
  const dynomoDB = new getDynamoDB.DynamoDB.DocumentClient();

  let todos;

  try {
    const results = await dynomoDB.scan({ TableName: "TodoTable" }).promise();
    // const results = ["One", "two"];
    todos = results.Items;
    // todos = results;
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
module.exports = { handler: addTodo };
