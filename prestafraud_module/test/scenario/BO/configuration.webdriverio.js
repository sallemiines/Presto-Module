'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');


describe('Test case n°1 = Check the default configuration', function () {
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
                .waitForExist(this.selector.BO.Common.menu, 90000)
                .call(done);
        });
    });

    describe('check PrestaShop Security configuration', function (done) {

        it('should go to modules page', function (done) {
            this.client
                .pause(5000)
                .click(this.selector.BO.ModulesPage.modules_subtab)
                .waitForExist(this.selector.BO.ModulesPage.page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            if (global.nbr == 0) {
                done(new Error('The module you are searching for does not exist!'));
            }
            else {
                this.client
                    .setValue(this.selector.BO.ModulesPage.search_input, global.module_tech_name_prestafraud)
                    .click(this.selector.BO.ModulesPage.search_button)
                    .pause(2000)
                    .waitForExist(this.selector.BO.ModulePagePrestaFraud.config_module_btn, 90000)
                    .click(this.selector.BO.ModulePagePrestaFraud.config_module_btn)
                    .call(done);
            }
        });

        it('Should configure the module', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.create_account_btn, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.create_account_btn)
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.agree_terms, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.agree_terms)
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.shop_email, 90000)
                .setValue(this.selector.BO.ModulePagePrestaFraud.shop_email,'demo@prestashop.com')
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.valid_compte_btn, 90000)
                .click(this.selector.BO.ModulePagePrestaFraud.valid_compte_btn)
                .call(done)
        });

        it('Should configure the shop', function (done) {
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.shop_id, 90000)
                .getAttribute(this.selector.BO.ModulePagePrestaFraud.shop_id, "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop ID is empty"));
                    }
                })
                .getAttribute(this.selector.BO.ModulePagePrestaFraud.shop_key, "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop KEY is empty"));
                    }
                })
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.shop_activity, 9)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.livraison_type, 4)
                //.selectByIndex(this.selector.carrier_type, 3)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.module_payment, 2)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.transfer_bancaire_type, 4)
                .selectByIndex(this.selector.BO.ModulePagePrestaFraud.paypal_type, 4)
                .pause(3000)
                .click(this.selector.BO.ModulePagePrestaFraud.prestashop_security_save)
                .call(done)
        });

        it('should go to the orders page', function (done) {
                this.client
                    .click(this.selector.BO.ModulePagePrestaFraud.orders)
                    .waitForExist(this.selector.BO.ModulePagePrestaFraud.orders_form, 5000)
                    .call(done);
        });

        it('should go to first order', function(done){
			    this.client
                    .click(this.selector.BO.ModulePagePrestaFraud.First_order)
                    //.waitForExist('//!*[@id="status"]/form/div/div[2]/button', 90000)
                    .call(done);
        });

        it('should verify the notification Prestafraud ', function(done){
            this.client
                .waitForExist(this.selector.BO.ModulePagePrestaFraud.Prestafraud_legand,5000)
                .getText(this.selector.BO.ModulePagePrestaFraud.Prestafraud_legand).then(function(text) {
                    if(text != "PrestaShop Security" ){
                         done(new Error("Notification Prestafraud dosen't exist "));
                    }
                })
                .call(done)
        });


 });


});