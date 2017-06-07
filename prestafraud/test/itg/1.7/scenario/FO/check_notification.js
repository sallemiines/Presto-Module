'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('The Check of the notification in Front Office', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Open the shop', function (done) {
        it('should acces to the Front Office', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('http://' + URL)
                .call(done);
        });
    });

    describe('Check the product', function (done) {
        it('should search for the product', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.logo_home_pageFO)
                .waitForExist(this.selector.first_product_home_page, 90000)
                .click(this.selector.first_product_home_page)
                .click(this.selector.add_to_cart)
                .call(done);
        });
        it('should click add to cart button ', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.layer_cart_command_button)
                .call(done);
        });
    });

    describe('Log out in Front Office', function (done) {
        it('should logout successfully in FO', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.logoutFO, 90000)
                .click(this.selector.logoutFO)
                .waitForExist(this.selector.access_loginFO, 90000)
                .call(done);

        });
    });
});