'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°3 = Configure the module', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("Check configuration  tab ", function (done) {

        it('should add the api key ', function (done) {
            global.fctname = this.test.title
            this.client
                .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[0])
            })
                .pause(3000)
                .waitForExist('//*[@id="modulecontent"]/div[1]/div[1]/a[2]', 3000)
                .click('//*[@id="modulecontent"]/div[1]/div[1]/a[2]')
                .waitForExist('//*[@id="google_api_key"]', 3000)
                .setValue('//*[@id="google_api_key"]', global.apiKey)
                .call(done);
        });

        it('should choose the position ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="page_position"]', 3000)
                .click('//*[@id="page_position"]')
                .selectByVisibleText('//*[@id="page_position"]', 'Beneath the product buttons')
                .call(done)
        })

        it('should add a banner above the video ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(7000)
                .waitForExist('//*[@id="youtube_banner_switch"]/label[1]', 3000)
                .click('//*[@id="youtube_banner_switch"]/label[1]')
                .call(done);
        });
        it('should add a banner text ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(5000)
            //    .waitForExist('//*[@id="youtube_banner_text_1"]', 3000)
            //   .execute(function (banner_name) {
            //       document.querySelector('//*[@id="youtube_banner_text_1"]').value = banner_name;
            //   }, global.bannerInput)
                .setValue('//*[@id="youtube_banner_text_1"]', global.bannerInput)
                .call(done);
        });

        it('should check the title  ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist('//*[@id="custom_title_switch"]/label[1]', 3000)
                .click('//*[@id="custom_title_switch"]/label[1]')
                .call(done);
        });
        it('should check the title position', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist('//*[@id="custom_title_position"]', 3000)
                .click('//*[@id="custom_title_position"]')
                .selectByVisibleText('//*[@id="custom_title_position"]', 'Sous la vidéo')
                .call(done);
        });


        it('should click on update button', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist('//*[@id="config"]/div[1]/form/center/input', 3000)
                .click('//*[@id="config"]/div[1]/form/center/input')
                .call(done);
        });

    });


})

