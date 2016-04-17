/**
 * Due to the nature of javascripts binary floating point arithmetic it is necessary to pull in a
 * third party library to properly handle financial calculations otherwise it is very unlikely
 * that any of the tests would actually pass.
 */
var BigNumber = require('./node_modules/bignumber.js/bignumber.js');

module.exports = {
  /**
   * Calculate the markup for a given project given the following rules:
   * @param project
   * @returns {string}
   */
  calculateMarkup: function (project) {
    var i;

    // Strip out any info from the basePrice that doesn't represent a number (this removes
    // the currency formatting) and assign to a BigNumber to allow for proper calculations
    var result = new BigNumber(project.basePrice.replace(/[^0-9\.]+/g, ''));

    // The remaining markups are calculated on top of the base price plus the initial markup,
    // we don't want to compound the remaining markups though so they must be maintained separately
    // and then added to the result.
    var markups = [];

    // Without exception, there is a flat markup on all jobs of 5%
    result = result.times('1.05');

    // For each person that needs to work on the job, there is a markup of 1.2%
    if (project.people) {
      for (i = 0; i < project.people; i++) {
        markups.push(result.times('0.012'));
      }
    }

    if (project.materials) {
      project.materials.forEach(function (material) {
        switch (material) {
          case 'drugs':
          case 'pharmaceuticals':
            // If pharmaceuticals are involved, there is an immediate 7.5% markup
            markups.push(result.times('0.075'));
            break;
          case 'food':
            // For food, there is a 13% markup
            markups.push(result.times('0.13'));
            break;
          case 'electronics':
            // Electronics require a 2% markup
            markups.push(result.times('0.02'));
            break;
        }

        // Everything else, there is no markup
      });
    }

    // Now that we've determined all of the markups we can apply them to the result.
    result = markups.reduce(
      function (prev, curr) {
        return prev.plus(curr);
      }, result);

    return '$' + result.toFixed(2);
  }
};
