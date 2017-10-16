'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°3 =Check the Fo ', function () {
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
                .waitForExist('//*[@id="add-to-cart-or-refresh"]/div[3]/div[3]/h3/i', 9000)

                .call(done);
        });
    });

})

