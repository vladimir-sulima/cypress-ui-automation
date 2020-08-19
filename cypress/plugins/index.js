/// <reference types="cypress" />
const debug = require("debug");
const path = require("path");
const gmail_tester = require("../../node_modules/gmail-tester/gmail-tester");
const { QueryTypes, sequelize } = require("../helpers/dbConnectionHelper");
const AWS = require("aws-sdk");
const { cognito_user_pool_id } = require("../config");



// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      const email = await gmail_tester.check_inbox(
        path.resolve(__dirname, "credentials.json"),
        path.resolve(__dirname, "token.json"),
        subject,
        from,
        to,
        10,                                          // Poll interval (in seconds)
        30                                           // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
      );
      return email;
    }
  });
  on("task", {
    "gmail:get-messages": async args => {
      const messages = await gmail_tester.get_messages(
        path.resolve(__dirname, "credentials.json"),
        path.resolve(__dirname, "token.json"),
        args.options
      );
      return messages;
    }
  });
  on("task", {
    "db:send-select-query": (query) => {
      return sequelize.query(query, { type: QueryTypes.SELECT }).then(result => {
        return result
      }).catch(err => console.log(err));
    }
  });
  on("task", {
    "db:send-delete-query": (query) => {
      return sequelize.query(query, { type: QueryTypes.DELETE }).then(result => {
        console.log(result)
        // console.log(result);
        return null
      }).catch(err => console.log(err));
    }
  });
  on("task", {
    "aws:remove-user-from-cognito": (email) => {
      const userToDelet = {
        Username: email,
        UserPoolId: cognito_user_pool_id
      };

      const cognitoServiceProvider = new AWS.CognitoIdentityServiceProvider();


      cognitoServiceProvider.adminDeleteUser(userToDelet, function (err, data) {
        if (err) {
          console.error(err);
        }
        console.log(data)
      });
      return "";
    }
  })
};
