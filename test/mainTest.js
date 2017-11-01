const chai = require('chai');
const assert = chai.assert;
const toMPH = require('../toMPH').toMPH;
const toFahrenheit = require('../toFahrenheit').toFahrenheit;
const weather = require('../weather').weather;


describe('toMPH', function() {
  it('return a number', function() {
    const aggressiveGreeting = yellPhrase('hey there, friend');
    assert.equal(aggressiveGreeting, 'HEY THERE, FRIEND');
  });
});
