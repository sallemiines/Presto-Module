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
            .waitForExist(this.selector.agree_terms, 90000)
            .click(this.selector.agree_terms)
            .pause(5000)
            .waitForExist(this.selector.your_email, 90000)
            .setValue(this.selector.your_email,'demo@prestashop.com')
            .call(done)
      });


      it('Should configure the shop', function (done) {
            global.fctname = this.test.title;
            this.client
            .pause(2000)
            .waitForExist(this.selector.already_have_account, 9000)
            .waitForExist(this.selector.shop_id)
            .selectByIndex(this.selector.shop_activity, 9)
            .click(this.selector.prestashop_security_save)
            .pause(2000)
            .call(done)
    });


    it('should go to the orders page', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.orders)
                .waitForExist(this.selector.orders_form, 5000)
                .call(done);
    });

    it('should verify the notification Prestafraud ', function(done){
            global.fctname = this.test.title;
            this.client
                .waitForExist('//*[@id="form-order"]/div/div[2]/table/tbody/tr[1]/td[12]/div/a',5000)
                .click('//*[@id="form-order"]/div/div[2]/table/tbody/tr[1]/td[12]/div/a')
                .waitForExist(this.selector.notification)
                .call(done)
    });



});

});