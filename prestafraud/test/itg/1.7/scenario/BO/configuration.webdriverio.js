'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');


describe('The Configuration of the Module', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    describe('PrestaShop Security configuration', function (done) {
        it('should go to modules page', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_installed)
                .click(this.selector.modules_installed)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .call(done);
        });

        it('should go to the module', function (done) {
            global.fctname = this.test.title;
            this.client
                .setValue(this.selector.modules_search, "prestafraud")
                .click(this.selector.modules_search_button)
                .pause(2000)
                .waitForExist(this.selector.btn_config, 90000)
                .click(this.selector.btn_config)
                .call(done);
        });

        it('Should configure the module', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist('//*[@id="trust_account_on"]', 90000)
                .click('//*[@id="trust_account_on"]')
                .waitForExist(this.selector.agree_terms, 90000)
                .click(this.selector.agree_terms)
                .waitForExist('//*[@id="create_account"]/form/div[1]/input', 90000)
                .setValue('//*[@id="create_account"]/form/div[1]/input','demo_prestashop.com')
                .waitForExist('/*//*[@id="submitCreateAccount"]', 90000)
                .click('/*//*[@id="submitCreateAccount"]')
                .call(done)
        });

        it('Should configure the shop', function (done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute('//*[@id="prestashop_trust"]/div[1]/input', "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop ID is empty"));
                    }
                })
                .getAttribute('//*[@id="prestashop_trust"]/div[2]/input', "value").then(function(text) {
                    if(text[1] == "" ){
                         done(new Error("Shop KEY is empty"));
                    }
                })
                .selectByIndex(this.selector.shop_activity, 9)
                .selectByIndex('//*[@id="prestashop_trust"]/div[5]/table/tbody/tr[1]/td[2]/select', 4)
                .selectByIndex('//*[@id="prestashop_trust"]/div[5]/table/tbody/tr[2]/td[2]/select', 3)
                .selectByIndex('//*[@id="prestashop_trust"]/div[6]/table/tbody/tr[1]/td[2]/select', 2)
                .selectByIndex('//*[@id="prestashop_trust"]/div[6]/table/tbody/tr[2]/td[2]/select', 4)
                .pause(5000)
                .click(this.selector.prestashop_security_save)
                .call(done)
        });

        it('should go to the orders page', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.orders)
                    .waitForExist(this.selector.orders_form, 5000)
                    .call(done);
        });

        it('should go to first order', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .click(this.selector.First_order)
                    //.waitForExist('//*[@id="status"]/form/div/div[2]/button', 90000)
                    .call(done);
        });

        it('should verify the notification Prestafraud ', function(done){
            global.fctname = this.test.title;
            this.client
                .waitForExist('//*[@id="content"]/div[5]/div/fieldset/legend',5000)
                .getText('//*[@id="content"]/div[5]/div/fieldset/legend').then(function(text) {
                    if(text != "PrestaShop Security" ){
                         done(new Error(""));
                    }
                })
                .call(done)
        });

 });


});