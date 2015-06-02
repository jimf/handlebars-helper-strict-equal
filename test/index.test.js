'use strict';

var test = require('tape'),
    Handlebars = require('handlebars'),
    strictEqual = require('..'),
    source = '{{#equal lvalue rvalue}}true block{{else}}false block{{/equal}}',
    template;

Handlebars.registerHelper('equal', strictEqual);
template = Handlebars.compile(source);

test('strict-equal', function(assert) {
    var cases = {};

    cases.equal = [
        { lvalue: 1,     rvalue: 1 },
        { lvalue: 'foo', rvalue: 'foo' },
        { lvalue: true,  rvalue: true }
    ];

    cases.notEqual = [
        { lvalue: 1,     rvalue: '1' },
        { lvalue: 'foo', rvalue: 'bar' },
        { lvalue: true,  rvalue: 1 },
        { lvalue: null,  rvalue: undefined }
    ];

    cases.equal.forEach(function(testcase) {
        var actual = template(testcase);
        assert.equal(actual, 'true block',
            'should return "true" block when values are strictly equal');
    });

    cases.notEqual.forEach(function(testcase) {
        var actual = template(testcase);
        assert.equal(actual, 'false block',
            'should return "false" block when values are not strictly equal');
    });

    function compileInvalidTemplate() {
        var source = '{{#equal lvalue}}true block{{else}}false block{{/equal}}',
            template = Handlebars.compile(source);

        template({ lvalue: 'foo', rvalue: 'bar' });
    }

    assert.throws(compileInvalidTemplate,
        'should throw an exception if run with the wrong number of params');

    assert.end();
});
