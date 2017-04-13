var assert = require('assert');
var greet = require('../helloworldjs');

describe('Greet', function(){
    describe('#Greet.greetCall', function(){
        it("It should print out hello world", function(){
            assert.equal("Hello World", greet.greetReturn('English'));
        })
    })
})
