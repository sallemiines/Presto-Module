'use strict';
var should = require('should');
var common = require('./common.webdriverio');


describe('Allscenario', function(){
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

    /*if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        //require('./scenario/BO/install_and_uninstall_module.js');
        require('./scenario/BO/install_module.js');

    }*/
    require('./scenario/BO/configuration.webdriverio.js');
   // require('./scenario/FO/check_notification.js');
    /*if (typeof module_tech_name !== 'undefined' && module_tech_name != "None") {
        require('./scenario/BO/uninstall_module.js');
    }*/

});
