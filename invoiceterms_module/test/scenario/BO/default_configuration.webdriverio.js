'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var pdfUtil = require('pdf-to-text');
var TextPosition;
describe('Test case n°1 = Check the default configuration', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});

	after(common.after);


		describe('Log in in Back Office', function(done){
		    it('should log in successfully in BO', function(done){
			    this.client
                    .signinBO()
                    .waitForExist(this.selector.menu, 90000)
                    .call(done);
			});
		});

		describe('Check the default configuration in BO', function(done){

           it('should go to orders', function(done){
                    this.client
                        .click(this.selector.orders)
                        .waitForExist(this.selector.orders_form, 90000)
                        .call(done);
            });

            it('should go to first order', function(done){
			    this.client
                    .click(this.selector.First_order)
                    .call(done);
		    });

            it('should download the document', function(done){
			    this.client
				    .pause(2000)
                    .click(this.selector.panel_document)
                    .pause(2000)
                    .click(this.selector.btn_download)
                    .pause(4000)
                    .getText(this.selector.btn_download).then(function(text) {
                        global.documentPDF = text;
                        global.documentPDF = global.documentPDF.replace(/^#/, "");
                    })
                    .call(done);
		    });

            it('should Go to document', function(done){
			    this.client
				    .pause(2000)
				    function func_verify(x){
				          if(x == "-1" ){
                             done();
                        }else{
                             done(new Error("invoice terms existe"));
                        }
				    }
                    pdfUtil.pdfToText('/home/fourat.achour/Téléchargements/'+global.documentPDF+'.pdf', function(err, data) {
                      if (err) throw(err);
                      global.TextPosition = data.indexOf('Conditions d');
                      func_verify(global.TextPosition);
                    })


		    });


		});



		
	describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
			this.client
				.signoutBO()
				.call(done);
		});
	});

});