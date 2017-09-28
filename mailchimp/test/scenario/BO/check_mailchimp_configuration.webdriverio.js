'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('The MailchimpIntegration Module', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);


    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .pause(5000)
                .url('https://' + URL + '/backoffice/')
                .waitForExist(this.selector.BO.AccessPage.login_input, 30000)
                .setValue(this.selector.BO.AccessPage.login_input, 'remi.gaillard@prestashop.com')
                .waitForExist(this.selector.BO.AccessPage.password_input, 30000)
                .setValue(this.selector.BO.AccessPage.password_input, 'abcd1234')
                .click(this.selector.BO.AccessPage.login_button)
                .call(done);
        });
    });


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
                .waitForExist(this.selector.BO.ModulesPage.search_input, 3000)
                .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name)
                .waitForExist(this.selector.BO.ModulesPage.search_button, 3000)
                .click(this.selector.BO.ModulesPage.search_button)
                .pause(3000)
                .getText(this.selector.BO.ModulesPage.page_loaded).then(function (nbr) {
                global.nbr = parseInt(nbr[0].charAt(0));
            })
                .call(done);
        });


        describe("Configure the module", function (done) {

            it('should click on configuration button ', function (done) {
                if (global.nbr == 0) {
                    done(new Error('The module you are searching for does not exist!'));
                }
                else {
                    this.client
                        .waitForExist(this.selector.BO.MailChimpModulePage.mailchimp_configuration_button, 3000)
                        .click(this.selector.BO.MailChimpModulePage.mailchimp_configuration_button)
                        .call(done)
                }
            })


            it("should click on connect to mailchimp button", function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.MailChimpModulePage.mailchimp_access_button, 3000)
                    .click(this.selector.BO.MailChimpModulePage.mailchimp_access_button)
                    .call(done)
            })

            it("should access to mailchimp", function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.MailChimpModulePage.login_input, 3000)
                    .setValue(this.selector.BO.MailChimpModulePage.login_input, 'ines50')
                    .waitForExist(this.selector.BO.MailChimpModulePage.password_input, 3000)
                    .setValue(this.selector.BO.MailChimpModulePage.password_input, 'Inezs/50')
                    .waitForExist(this.selector.BO.MailChimpModulePage.login_button, 3000)
                    .click(this.selector.BO.MailChimpModulePage.login_button)
                    .call(done)

            })

            it("should select a list", function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.MailChimpModulePage.list_select, 2000)
                    .selectByIndex(this.selector.BO.MailChimpModulePage.list_select, 2)
                    .getText(this.selector.BO.MailChimpModulePage.list_selected).then(function (selectValue) {
                    global.value = selectValue
                    should(global.value).be.equal("PrestoTests")
                })

                    .waitForExist(this.selector.BO.MailChimpModulePage.save_list_button, 2000)
                    .click(this.selector.BO.MailChimpModulePage.save_list_button)
                    .waitForExist(this.selector.BO.MailChimpModulePage.connection_list, 2000)
                    .getText(this.selector.BO.MailChimpModulePage.connection_list).then(function (text) {
                    var list = text;
                    should(list).be.equal("Connected to list " + global.value);
                })
                    .call(done)

            })
        });
    })
})