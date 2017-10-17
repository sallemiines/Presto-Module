'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°3 = Update product & check it in FO', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Add video to product ", function (done) {
        it('should go to page product ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(3000)
                .waitForExist(this.selector.BO.ProductSetting.categorie_menu, 90000)
                .moveToObject(this.selector.BO.ProductSetting.categorie_menu)
                .pause(5000)
                .waitForExist(this.selector.BO.ProductSetting.product_menu, 90000)
                .click(this.selector.BO.ProductSetting.product_menu)
                .call(done)

        });
        it('should choose product ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.ProductSetting.update_product_icon, 9000)
                .click(this.selector.BO.ProductSetting.update_product_icon)
                .pause(3000)
                .call(done)
        });

        it('should click on module in page product ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.modules_button, 9000)
                .click(this.selector.BO.ProductSetting.modules_button)
                .call(done)

        });

        it('should click on configurer  ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.configure_button, 3000)
                .click(this.selector.BO.ProductSetting.configure_button)
                .pause(3000)
                .call(done);
        });
        it('should select type of language', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.language_list, 90000)
                .click(this.selector.BO.ProductSetting.language_list)
                .selectByValue(this.selector.BO.ProductSetting.language_list, 0)
                .pause(7000)
                .call(done);
        });

        it('should add title video', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.title_video_input, 90000)
                .click(this.selector.BO.ProductSetting.title_video_input)
                .execute(function (title) {
                    document.querySelector('input#youtube_custom_title_1').value = title;
                }, global.titleVideo)
                .call(done);
        });

        it('should select method  ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.view_button, 9000)
                .click(this.selector.BO.ProductSetting.view_button)
                .pause(3000)
                .call(done)
        });
        it('should add url video ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.url_input, 9000)
                .setValue(this.selector.BO.ProductSetting.url_input, global.videoUrlInput)
                .waitForExist(this.selector.BO.ProductSetting.save_url_button, 9000)
                .click(this.selector.BO.ProductSetting.save_url_button)
                .pause(2000)
                .call(done)
        });

        it('should click on  save ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.save_button, 3000)
                .click(this.selector.BO.ProductSetting.save_button)
                .call(done)
        });

        it('Should click on visualiser', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ProductSetting.view_button, 9000)
                .click(this.selector.BO.ProductSetting.view_button)
                .pause(5000)
                .call(done)

        })
        it('should detect if the video is visible', function () {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .isVisible(".youtube-header-banner page-product-heading.h3").then(function (isVisible) {
                should(isVisible).to.be.equal(true)
            })
                .call(done)
        })


    });

})

