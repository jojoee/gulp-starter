var util = require('./util');

/**
 * Position class
 * 
 * @param {number} x
 * @param {number} y
 * 
 * @returns {Object}
 */
var Position = function(x, y) {
  this.x = x;
  this.y = y;
};

/**
 * Vector class
 * extend Position class
 * 
 * @param {number} x
 * @param {number} y
 * @param {number} [rotation=0]
 * 
 * @returns {Object}
 */
var Vector = function(x, y, rotation) {
  if (typeof rotation === 'undefined') rotation = 0;
  Position.call(this, x, y);

  this.rotation = rotation;
};

Vector.prototype = Object.create(Position.prototype);
Vector.prototype.constructor = Vector;

/**
 * Return Vector to JSON object
 * 
 * @returns {Object}
 */
Vector.prototype.toJson = function() {
  var result = {
    x: this.x,
    y: this.y,
    rotation: this.rotation,
  };

  return result; 
};

/**
 * Update Vector properties
 * 
 * @param {number} x
 * @param {number} y
 * @param {number} rotation
 */
Vector.prototype.update = function(x, y, rotation) {
  this.x = x;
  this.y = y;
  this.rotation = rotation;
};

/**
 * Update Vector properties by JSON object
 * 
 * @param {Object}
 */
Vector.prototype.updateByJson = function(obj) {
  this.x = obj.x;
  this.y = obj.y;
  this.rotation = obj.rotation;
};

module.exports = {
  Position: Position,
  Vector: Vector,
};
