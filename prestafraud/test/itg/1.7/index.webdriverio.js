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

    require('./scenario/BO/configuration.webdriverio.js');
    require('./scenario/FO/buy_product.webdriverio.js');
    require('./scenario/BO/verify.webdriverio.js');

});
