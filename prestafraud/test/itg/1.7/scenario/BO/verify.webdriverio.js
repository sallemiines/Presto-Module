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

    describe('Verify PrestaShop Security ', function (done) {

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