'use strict';
var should = require('should');
var common = require('../../../../common/common.webdriverio');
var globals = require('../../../../common/globals.webdriverio.js');

describe('Test n°2 =Check the configuration tab', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });

    after(common.after);

    describe("get the api from google ", function (done) {
        it('should go to google email  ', function (done) {
            global.fctname = this.test.title
            this.client
                .url('https://console.developers.google.com')
                .call(done);
        });


    it('should enter the google email', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist('//*[@id="identifierId"]', 90000)
            .setValue('//*[@id="identifierId"]', 'prestotests@gmail.com')
            .waitForExist('//*[@id="identifierNext"]/content/span', 90000)
            .click('//*[@id="identifierNext"]/content/span')
            .call(done);
    });

    it('should enter the google password', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForVisible('//*[@id="password"]/div[1]/div/div[1]/input', 90000)
            .setValue('//*[@id="password"]/div[1]/div/div[1]/input', 'presto_tests')
            .waitForExist('//*[@id="passwordNext"]/content/span', 90000)
            .click('//*[@id="passwordNext"]/content/span')
            .pause(9000)
            .call(done);
    });
        it('should access to the app PrestashopBlockYoutubeModule', function (done) {
            this.client

                .waitForExist('/html/body/pan-shell/div/div[1]/pan-console-platform-bar/pan-platform-bar/header/div/div[1]/platform-bar-left/pan-platform-bar-purview-switcher/div/div/a', 90000)
                .click('/html/body/pan-shell/div/div[1]/pan-console-platform-bar/pan-platform-bar/header/div/div[1]/platform-bar-left/pan-platform-bar-purview-switcher/div/div/a')
                .pause(3000)
                //.waitForExist('//*[@id="dialogContent_9"]/div/div[2]/div/div/div/pan-purview-picker-list/div/span/md-virtual-repeat-container/div/div[2]/div[1]/div/div[3]/div[1]/a')
                .waitForExist('//div[@class="md-virtual-repeat-offsetter"]/div[1]/div/div[3]/div[1]/a',9000)
                .click('//div[@class="md-virtual-repeat-offsetter"]/div[1]/div/div[3]/div[1]/a')
                .pause(5000)
                .call(done);
        });
        it('should go to identifiants menu', function (done) {
            this.client
                .waitForExist('//*[@id="p6ntest-vulcan-leftnav-credentials"]/span', 90000)
                .click('//*[@id="p6ntest-vulcan-leftnav-credentials"]/span')
                .waitForExist('/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/div[1]/ng-include/div/a/span', 90000)
                .click('/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/div[1]/ng-include/div/a/span')
                .moveToObject('/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/div[1]/ng-include/div/a/span')
                .waitForExist('/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/div[1]/ng-include/div/div/section[1]/div/div/div[1]/div[1]/span[1]/span[1]/span', 90000)
                .click('/html/body/pan-shell/div/div[2]/div/div[1]/pan-upgrade-panel-container/div/ng-transclude/div[2]/div/div/ng-transclude/div/div[2]/md-content/div/div[2]/div/div[1]/ng-include/div/div/section[1]/div/div/div[1]/div[1]/span[1]/span[1]/span')
                .pause(70000)
                .getText('//div[@class="md-dialog-content p6n-modal-content"]/span/ng-transclude/span').then(function(text) {
                global.apikey = text;
                console.log(global.apikey);

            })
                .call(done);
        });

    });
})

