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

    // /*-->  Test n°1 =Connection with Google  */

   // require('./scenario/FO/check_api_google.webdriverio.js');

    // /*--> Test n°2 = Check the documentation tab
    require('./scenario/BO/check_block_youtube_video_documentation_tab.webdriverio.js');
    // /*-->  Test n°3 = Check the blockYoutubeModuleConfiguration
    require('./scenario/BO/check_block_youtube_video_configuration_tab.webdriverio.js');
    // /*-->  Test n°4 = Update product
    require('./scenario/BO/check_video_in_product_webdriverio.js');
    // /*-->  Test n°5 = Check the video in FO
   // require('./scenario/FO/check_Fo.webdriverio_webdriverio.js');

});
