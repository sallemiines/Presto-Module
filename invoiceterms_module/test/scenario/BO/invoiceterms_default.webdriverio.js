'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var pdfUtil = require('pdf-to-text');

describe('Check the order in BO', function(){
	common.initMocha.call(this);

	before(function(done){
		this.selector = globals.selector;
		this.client.call(done);
	});


	after(common.after);

	try{
		describe('Log in in Back Office', function(done){
		    it('should log in successfully in BO', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .signinBO()
                    .waitForExist(this.selector.menu, 90000)
                    .call(done);
			});
		});

		describe('Test case n°2 = Check the added configuration', function(done){

           it('should go to orders', function(done){
                    global.fctname= this.test.title;
                    this.client
                        .click(this.selector.orders)
                        .waitForExist(this.selector.orders_form, 90000)
                        .call(done);
            });

            it('should go to first order', function(done){
		        global.fctname= this.test.title;
			    this.client
                    .click(this.selector.First_order)
                    .call(done);
		    });

            it('should payment accept', function(done){
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
                    .click(this.selector.order_state)
                    .pause(2000)
                    .click(this.selector.payment_accepted)
                    .pause(2000)
                    .click(this.selector.valid_payment)
                    .call(done);
		    });

            it('should download the document', function(done){
		        global.fctname= this.test.title;
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
		        global.fctname= this.test.title;
			    this.client
				    .pause(2000)
				    function func_verify(x){
				          if(x == -1 ){
                            done(new Error("invoice terms doesn't exist"));
                        }else{
                            done();
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
            global.fctname= this.test.title;
			this.client
				.signoutBO()
				.call(done);
		});
	});
	}catch(e){
	};
});