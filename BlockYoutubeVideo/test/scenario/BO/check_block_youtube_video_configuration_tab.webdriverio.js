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
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.configuration_tab, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.configuration_tab)
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.api_key_input, 9000)
                .setValue(this.selector.BO.ModuleBlockYoutubeVideo.api_key_input, global.apiKey)
                .call(done);
        });

        it('should choose the position ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.position_select, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.position_select)
                .selectByVisibleText(this.selector.BO.ModuleBlockYoutubeVideo.position_select, 'Beneath the product buttons')
                .call(done)
        });

        it('should add a banner above the video ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(7000)
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.banner_button, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.banner_button)
                .call(done);
        });

        it('should add a banner text ', function (done) {
            global.fctname = this.test.title
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.banner_txt, 9000)
                .execute(function (banner_txt) {
                    document.querySelector(this.selector.BO.ModuleBlockYoutubeVideo.banner_txt).value = banner_txt;
                }, global.bannerInput)
                .call(done);
        });

        it('should check the title  ', function (done) {
            global.fctname = this.test.title
            this.client
                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.title_position_button, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.title_position_button)
                .call(done);
        });

        it('should check the title position', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.title_position_select, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.title_position_select)
                .selectByVisibleText(this.selector.BO.ModuleBlockYoutubeVideo.title_position_select, 'Sous la vidéo')
                .call(done);
        });

        it('should click on update button', function (done) {
            global.fctname = this.test.title
            this.client

                .waitForExist(this.selector.BO.ModuleBlockYoutubeVideo.update_button, 9000)
                .click(this.selector.BO.ModuleBlockYoutubeVideo.update_button)
                .call(done);
        });

    });


})

