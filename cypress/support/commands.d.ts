/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable{

        /**
         * Login into secure area by using <username> and <password>
         * 
         * @example
         * cy
         *  .login('user','123')
         */
        login()
    }
}