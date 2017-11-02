const expect = chai.expect;



describe('toMPH', function(){
  it('returns a number', function(){
    expect(toMPH(10)).to.equal(22)
  })
})

describe('toFahrenheit', function(){
  it('returns degrees in Fahrenheit', function(){
    expect(toFahrenheit(280)).to.equal(44)
  })
})


var testArr = [[{wind:{speed:10}}],[{}]]

describe('buildWindArray', function(){
  it('fills an empty array with wind speeds of resorts', function(){
    expect(Array.isArray(buildWindArray(['vail'],testArr))).to.equal(true)
})
})
