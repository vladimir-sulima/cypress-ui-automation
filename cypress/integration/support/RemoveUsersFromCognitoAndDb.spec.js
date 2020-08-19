///<reference types="Cypress"/>
import { db_and_aws_scenarios } from "../../scenarios/db_and_aws_interaction_scenarios";

const emailPattern = "mypay.vladimir%"

describe("Delete user from Cognito and DB", function () {
    it("Delete from DB", function () {
        db_and_aws_scenarios.get_AllUsers_ByEmailPattern(emailPattern)
            .then(users => {
                users.forEach(user => {
                    cy.log(user.email)
                    db_and_aws_scenarios.remove_UserFromDBAndCognito_ByEmail(user.email);
                });
            });
    })
})