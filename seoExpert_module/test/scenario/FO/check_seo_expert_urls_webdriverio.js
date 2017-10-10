'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°3 = Check the Url in Fo', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Check the Url in FO", function (done) {

        it('should go to FO', function (done) {
            global.fctname = this.test.title
            this.client
                .url('http://' + URL)
                .waitForExist('//*[@id="content"]/section/div/article/div/a/img', 90000)
                .click('//*[@id="content"]/section/div/article/div/a/img')
                .call(done);
        });

        it('should get name product', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="wrapper"]/div/nav/ol/li[2]/a/span', 9000)
                .getText('//*[@id="wrapper"]/div/nav/ol/li[2]/a/span').then(function (text) {
                global.title = text.toLowerCase();
            })
                .call(done);
        });

        it('should get description product', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[1]/a', 9000)
                .click('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[1]/a')
                .getText('//*[@id="description"]/div/p').then(function (text) {
                global.description = text.toLowerCase();
            })
                .call(done);
        });

        it('should get reference product', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[2]/a', 9000)
                .click('//*[@id="main"]/div[1]/div[2]/div[2]/div[4]/ul/li[2]/a')
                .getText('//*[@id="product-details"]/div[1]/span').then(function (text) {
                console.log(text);
                global.reference = text.toLowerCase();
            })
                .call(done);

        });

        it('should check the url form ', function (done) {
            global.fctname = this.test.title
            this.client
                .getUrl().then(function (url) {
                var productUrl = url.split('1-').pop().split('.html').shift();
                should(productUrl).be.equal(global.title + '-' + global.description + '-' + global.reference)
            })
                .pause(90000)
                .call(done);
        });
    });
})
