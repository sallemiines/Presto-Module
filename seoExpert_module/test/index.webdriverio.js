'use strict';
var should = require('should');
var common = require('../../common/common.webdriverio');


describe('Allscenario', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    // Test n°1 = Check the SeoExpert configuration
    require('./scenario/BO/check_seo_expert_configuration.webdriverio.js');
    // Test n°2 = Check the url form
    require('./scenario/BO/check_seo_expert_optimizing_urls_webdriverio.js');
    // Test n°3= Check the url form in fo
    require('./scenario/FO/check_seo_expert_urls_webdriverio.js');


});
