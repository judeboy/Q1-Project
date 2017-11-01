const expect = chai.expect;



describe('toMPH', function(){
  it('returns a number', function(){
    expect(toMPH(10)).to.equal(22)
  })
})

describe('toFahrenheit', function(){
  it('returns a number', function(){
    expect(toFahrenheit()).to.be.a('number')
  })
})

// describe('weather', function(){
//   it('returns a JSON object', function(){
//     expect(weather()).to.be.a('object')
//   })
// })
