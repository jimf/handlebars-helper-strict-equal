'use strict';

/**
 * Test whether two values are equal.
 *
 * @param {*} lvalue Left-hand value
 * @param {*} rvalue Right-hand value
 * @return {string} Result of if/else fragment function
 */
module.exports = function(lvalue, rvalue, options) {
    if (arguments.length !== 3) {
        throw new Error('Handlebars helper strict-equal expects 2 parameters');
    }

    return options[lvalue === rvalue ? 'fn' : 'inverse'](this);
};
