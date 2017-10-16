'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°5 =Check the Fo ', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Check the product changes in FO", function (done) {

        it('should go to FO', function (done) {
            global.fctname = this.test.title
            this.client
                .url('http://' + URL)
                .call(done);
        });

        it('should search the product', function (done) {
            this.client
                .waitForExist('//*[@id="search_widget"]/form/input[2]', 3000)
                .setValue('//*[@id="search_widget"]/form/input[2]', 'produitTest')
                .waitForExist('//*[@id="search_widget"]/form/button/i', 3000)
                .click('//*[@id="search_widget"]/form/button/i')
                .pause(3000)
                .call(done);
        });


        it('should click on product', function (done) {
            this.client
                .waitForExist('//*[@id="js-product-list"]/div[1]/article/div/a/img', 3000)
                .click('//*[@id="js-product-list"]/div[1]/article/div/a/img')
                .pause(90000)
                .call(done);
        });


    });


})

