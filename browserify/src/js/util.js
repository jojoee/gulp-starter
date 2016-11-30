var util = {

  /**
   * For checking if a
   * - string is empty
   * - null
   * - undefined
   * 
   * @see http://stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript
   * 
   * @param {string|Array|null}
   * @returns {boolean}
   */
  isEmpty: function(a) {
    return (!a || 0 === a.length);
  },

  /**
   * Check if the object is empty
   * 
   * @see http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
   * @see http://stackoverflow.com/questions/4994201/is-object-empty
   * 
   * @param {Object} obj
   * @returns {boolean}
   */
  isEmptyObject: function(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }

    return true && JSON.stringify(obj) === JSON.stringify({});
  },

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   * 
   * @see http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
   * 
   * @param {number} min - float number
   * @param {number} max - float number
   * @returns {number} float number
   */
  getRandomArbitrary: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution! 
   * 
   * @see http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
   * 
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Get random id
   *
   * @see http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
   * 
   * @param  {number} [n=8] - number of returned id string
   * @return {string}
   */
  getRandomId: function(n) {
    if (typeof n === 'undefined') n = 8;
    var text = '',
      possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      i = 0;

    for (i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  },

  /**
   * Return a number of distance between 2 point
   * by given x1, y1, x2, y2
   * 
   * @param  {number} x1
   * @param  {number} y1
   * @param  {number} x2
   * @param  {number} y2
   * @return {number}
   */
  getDistance: function(x1, y1, x2, y2) {
    var dx = x1 - x2,
      dy = y1 - y2;

    return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Get distance between
   * 
   * @param {Position|Vector} p1
   * @param {Position|Vector} p2
   * @returns {number}
   */
  getDistanceBetween: function(p1, p2) {
    return this.getDistance(p1.x, p1.y, p2.x, p2.y);
  },

  /**
   * Get rotation between
   * 
   * @see https://gist.github.com/conorbuck/2606166
   * 
   * @param {Position|Vector} p1
   * @param {Position|Vector} p2
   * @returns {number}
   */
  getRotationBetween: function(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  },

  getDegreeBetween: function(p1, p2) {
    return this.getRotationBetween(p1, p2) * 180 / Math.PI;
  },

  /**
   * Creature 2D array
   * 
   * @see http://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
   * 
   * @param {number} nRows
   * @param {number} nCols
   * @param {any} defaultValue
   */
  creature2DArray: function(nRows, nCols, defaultValue) {
    var arr = [],
      i = 0,
      j = 0;

    for (i = 0; i < nRows; i++) {
      arr.push([]);
      arr[i].push(new Array(nCols));

      for (j = 0; j < nCols; j++) {
        arr[i][j] = defaultValue;
      }
    }

    return arr;
  },

  /*---------------------------------------------------------------- Date & Time
   */

  /**
   * Get current UTC timestamp
   * 
   * @see http://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
   * 
   * @returns {number}
   */
  getCurrentUtcTimestamp: function() {
    return Date.now();
  },

  /**
   * Convert timestamp to local string
   * 
   * @see http://stackoverflow.com/questions/19485353/function-to-convert-timestamp-to-human-date-in-javascript
   * 
   * @param {number} timestamp
   * @returns {string}
   */
  convertTimestampToLocaleString: function(timestamp) {
    var dateTime = new Date(timestamp);

    return dateTime.toLocaleString();
  },

  /*---------------------------------------------------------------- DOM
   */

  /**
   * Add class to element
   * 
   * @param {Element} ele
   * @param {string} [className=]
   * @returns {Element}
   */
  addClass: function(ele, className) {
    if (typeof className === 'undefined') className = '';
    return ele.classList.add(customClass);
  },

  /**
   * Remove class from element
   * 
   * @param {Element} ele
   * @param {string} [className=]
   * @returns {Element}
   */
  removeClass: function(ele, className) {
    if (typeof className === 'undefined') className = '';
    return ele.classList.remove(className);
  },

  /**
   * Remove element
   * 
   * @see http://stackoverflow.com/questions/3387427/remove-element-by-id
   * 
   * @param {Element} elem - DOM Element object
   */
  removeElement: function(elem) {
    elem.parentNode.removeChild(elem);
  },
};

module.exports = util;
