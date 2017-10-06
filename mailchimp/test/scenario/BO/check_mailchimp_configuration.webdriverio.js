'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°2 = Check the mailchimp configuration', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Should access to the modules page', function (done) {
        it('should go to modules page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.ModulesPage.modules_subtab, 90000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .call(done)
        })
        it('should go to the mailchimp module', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulesPage.search_input, 90000)
                .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name_mailchimp)
                .waitForExist(this.selector.BO.ModulesPage.search_button, 90000)
                .click(this.selector.BO.ModulesPage.search_button)
                .pause(3000)
                .getText(this.selector.BO.ModulesPage.page_loaded).then(function (nbr) {
                global.nbr = parseInt(nbr[0].charAt(0));
            })
                .call(done)
        })
    });

    describe("Configure the module", function (done) {

        it('should click on configuration button ', function (done) {
            if (global.nbr === 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .waitForExist(this.selector.BO.MailChimpModulePage.configuration_button, 90000)
                    .click(this.selector.BO.MailChimpModulePage.configuration_button)
                    .call(done)
            }
        })

        it("should access to the module configuration  page", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.MailChimpModulePage.access_button, 90000)
                .click(this.selector.BO.MailChimpModulePage.access_button)
                .call(done)
        })

        it("should access to mailchimp", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.MailChimpModulePage.login_input, 90000)
                .setValue(this.selector.BO.MailChimpModulePage.login_input, 'prestotests')
                .waitForExist(this.selector.BO.MailChimpModulePage.password_input, 90000)
                .setValue(this.selector.BO.MailChimpModulePage.password_input, 'Presto_tests1')
                .waitForExist(this.selector.BO.MailChimpModulePage.login_button, 90000)
                .click(this.selector.BO.MailChimpModulePage.login_button)
                .call(done)

        })

        it("should add a  new name list ", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.MailChimpModulePage.list_input, 90000)
                .setValue(this.selector.BO.MailChimpModulePage.list_input, global.listNameInput)
                .click(this.selector.BO.MailChimpModulePage.save_button)
                .getText(this.selector.BO.MailChimpModulePage.connection_list).then(function (text) {
                var list = text;
                should(list).be.equal("Connected to list " + global.listNameInput);
            })
                .call(done)
        })

    });

    describe("Disconnect from list", function (done) {
        it('should click on disconnect button', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.MailChimpModulePage.save_button, 90000)
                .click(this.selector.BO.MailChimpModulePage.save_button)
                .call(done)
        })
    });

    describe('Should Select an existing List ', function (done) {

        it("should select a list", function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.MailChimpModulePage.list_select, 90000)
                .selectByVisibleText(this.selector.BO.MailChimpModulePage.list_select, global.listNameInput).getText('option:checked').then(function (selectValue) {
                global.value = selectValue
                should(global.value).be.equal(global.listNameInput)
            })
                .call(done)
                .pause(3000)
        })
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        })
    });

})
