const expect = chai.expect;



describe('toMPH', function(){
  it('returns a number', function(){
    expect(toMPH()).to.be.a('number')
  })
})

describe('toFahrenheit', function(){
  it('returns a number', function(){
    expect(toFahrenheit()).to.be.a('number')
  })
})

describe('weather', function(){
  it('returns a JSON object', function(){
    expect(weather()).to.be.a('object')
  })
})
