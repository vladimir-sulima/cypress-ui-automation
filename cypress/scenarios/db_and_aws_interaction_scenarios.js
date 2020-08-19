///<reference types="Cypress"/>


class db_and_aws_interaction_scenarios {

    remove_UserFromDBAndCognito_ByEmail(email) {
        cy.task("db:send-delete-query", `DELETE FROM dev_database.identity_provider_mypay_relations where user_id = (SELECT id FROM dev_database.users where email = '${email}')`, null, { timeout: 60000 })
        cy.task("db:send-delete-query", `DELETE FROM dev_database.relationships WHERE user_id = (SELECT id FROM dev_database.users where email = '${email}')`, null, { timeout: 60000 })
        cy.task("db:send-delete-query", `DELETE FROM dev_database.users where email = '${email}'`, null, { timeout: 60000 })
        cy.task("aws:remove-user-from-cognito", email).then(console.log);
    }
    verify_UserExistInDbAndStatus_ByEmail(email, isDisabled) {
        cy.task("db:send-select-query", `select * from dev_database.users WHERE email='${email}'`, null, { timeout: 60000 })
            .then(result => {
                assert.equal(result[0].email, email, "Verify 'email' column value exist.");
                assert.equal(result[0].is_disable, isDisabled, "Verify 'isDisabled' column value")
            });
    }
    get_AllUsers_ByEmailPattern(emailLike) {
        return cy.task("db:send-select-query", `select * from dev_database.users WHERE email like'${emailLike}'`, null, { timeout: 60000 })
            .then(result => {
                // assert.equal(result[0].email, "some email") 
                return result;
            });
    }
}
export default db_and_aws_interaction_scenarios;
export const db_and_aws_scenarios = new db_and_aws_interaction_scenarios();

