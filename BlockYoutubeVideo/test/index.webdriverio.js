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


    // /*--> Test n°1 =Connect to BO &  Check the documentation tab
    require('./scenario/BO/check_block_youtube_video_documentation_tab.webdriverio.js');
    // /*-->  Test n°2 = configure the  blockYoutubeModule
    require('./scenario/BO/check_block_youtube_video_configuration_tab.webdriverio.js');
    // /*-->  Test n°3 = Update product & check it in FO
    require('./scenario/BO/check_video_in_product_webdriverio.js');
});
