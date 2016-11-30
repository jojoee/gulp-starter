var config = require('./config'),
  util = require('./util'),
  component = require('./component'),
  Position = component.Position,
  Vector = component.Vector;

var core = {

  /**
   * Initialize
   */
  init: function() {
    console.log('core - init');

    var pos1 = new Position(1, 2);
    var vec1 = new Vector(3, 4);

    console.log('config', config);
    console.log('pos1', pos1);
    console.log('vec1', vec1);
  },
};

module.exports = core;
