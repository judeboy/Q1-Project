const expect = chai.expect;


var testArr = [[{wind:{speed:10}}],[{}]]

describe('toMPH', function(){
  it('returns a wind speed in MPH', function(){
    expect(toMPH(10)).to.equal(22)
  })
})

describe('toFahrenheit', function(){
  it('returns temperature in Fahrenheit', function(){
    expect(toFahrenheit(280)).to.equal(44)
  })
})

describe('buildWindArray', function(){
  it('fills an empty array with wind speeds of resorts', function(){
    expect(Array.isArray(buildWindArray(['vail'],testArr))).to.equal(true)
  })
})
