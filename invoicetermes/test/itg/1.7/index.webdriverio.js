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


	// require('./scenario/BO/invoicetermsbefore.webdriverio');
	// require('./scenario/FO/buy_product.webdriverio');
	// require('./scenario/BO/invoicetermsafter.webdriverio');
	 require('./scenario/BO/invoicetermsedit.webdriverio');

});
