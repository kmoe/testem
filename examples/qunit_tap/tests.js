var qunitTap = require('qunit-tap');
var QUnit = require('qunitjs');
var hello = require('./hello');

qunitTap(QUnit, console.log.bind(console));
QUnit.config.autorun = false;


QUnit.module('hello');


QUnit.test('says hello world', function(assert){
    assert.equal(hello(), 'hello moon', 'should equal hello world');
});

QUnit.test('says hello to person', function(assert){
    assert.equal(hello('Bob'), 'hello Bob', 'should equal hello Bob');
});

QUnit.load();
