var nupack = require('../nupack.js');

describe('nupack', function () {
  describe('calculateMarkup', function() {
    it('calculates the correct markup given input 1 outlined in the test', function (done) {
      var project = {
        basePrice: '$1299.99',
        people: 3,
        materials: [
          'food'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1591.58');
      done();
    });

    it('calculates the correct markup given input 2 outlined in the test', function (done) {
      var project = {
        basePrice: '5432.00',
        people: 1,
        materials: [
          'drugs'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$6199.81');
      done();
    });

    it('calculates the correct markup given input 3 outlined in the test', function (done) {
      var project = {
        basePrice: '$12456.95',
        people: 4,
        materials: [
          'books'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$13707.63');
      done();
    });
  });
});