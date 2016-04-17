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

    it('calculates the correct markup when food is used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'food'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1199.10');
      done();
    });

    it('calculates the correct markup when pharmaceuticals are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'pharmaceuticals'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1141.35');
      done();
    });

    it('calculates the correct markup when drugs (pharmaceuticals) are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'drugs'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1141.35');
      done();
    });

    it('calculates the correct markup when electronics are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'electronics'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1083.60');
      done();
    });

    it('calculates the correct markup when other materials are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'books'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1062.60');
      done();
    });

    it('calculates the correct markup when multiple materials are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1,
        materials: [
          'books',
          'food',
          'electronics',
          'drugs'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1298.85');
      done();
    });

    it('calculates the correct markup when no materials are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 1
      };

      expect(nupack.calculateMarkup(project)).toBe('$1062.60');
      done();
    });

    it('calculates the correct markup when no people are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        materials: [
          'books'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1050.00');
      done();
    });

    it('calculates the correct markup when multiple people are used', function (done) {
      var project = {
        basePrice: '$1000.00',
        people: 4,
        materials: [
          'books'
        ]
      };

      expect(nupack.calculateMarkup(project)).toBe('$1100.40');
      done();
    });
  });
});