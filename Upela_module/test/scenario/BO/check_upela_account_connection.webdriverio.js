'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

global.webservice_key='';

describe('Test case n°2 = check upela account connection', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('Account connection', function (done) {


        it('should go to the module configuration', function (done) {
            this.client
                .pause(5000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .waitForExist(this.selector.BO.ModulesPage.search_input, 90000)
                .setValue(this.selector.BO.ModulesPage.search_input, "upela")
                .waitForExist(this.selector.BO.ModulesPage.search_button, 90000)
                .click(this.selector.BO.ModulesPage.search_button)
                .getText(this.selector.BO.ModulesPage.number_of_module_found).then(function (text) {
                global.nbr = text.indexOf('0');
                if ((global.nbr != -1)||(global.nbr == 0)){
                    done(new Error('The module you are searching for does not exist!'));
                }
            })
                .waitForExist(this.selector.BO.ModulesPage.configuration_button, 90000)
                .click(this.selector.BO.ModulesPage.configuration_button)
                .call(done);
        });

        it('should go to the module connection tabs and disconnect ' , function (done) {
            this.client
                .waitForExist('//*[@id="upelaTabs"]/li[3]/a', 90000)
                .click('//*[@id="upelaTabs"]/li[3]/a')

                .waitForExist('//*[@id="settings_form"]/div[1]/div/div/form/div[3]/div/div/button', 90000)
                .click('//*[@id="settings_form"]/div[1]/div/div/form/div[3]/div/div/button')


                .waitForExist('//*[@id="home_form"]/div[1]/div/div/div[2]/a[2]')
                .click('//*[@id="home_form"]/div[1]/div/div/div[2]/a[2]')

                .call(done)
        });

        it('should go to the module connection tabs and connect ' , function (done) {
            this.client

                .waitForExist('//*[@id="email"]', 90000)
                .setValue('//*[@id="email"]', "fourat.ach@gmail.com")

                .waitForExist('//*[@id="password"]', 90000)
                .setValue('//*[@id="password"]', "242061")

                .waitForExist('//*[@id="settings_form"]/div/div/div/form/div[3]/div[1]/div/button', 90000)
                .click('//*[@id="settings_form"]/div/div/div/form/div[3]/div[1]/div/button')
                .waitForExist('//*[@id="content"]/div[5]', 90000)

                .getText('//*[@id="content"]/div[5]').then(function (text) {
                    if (text!='Connexion réussie !'){
                    done(new Error('erreur de connexion'));
                    }else
                    done();
                })

        });





    });

});