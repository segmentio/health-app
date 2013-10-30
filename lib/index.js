
var express = require('express');


/**
 * Expose `Health`.
 */

module.exports = Health;


/**
 * Create a new `Health` subapp.
 */

function Health () {
  if (!(this instanceof Health)) return new Health();
}


/**
 * Return an express app for mounting.
 *
 * @return {App}
 */

Health.prototype.app = function () {
  var render = this.render.bind(this);
  return express()
    .get('/health', render)
    .get('/internal/health', render);
};


/**
 * Render the 200 OK for health.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */

Health.prototype.render = function (req, res, next) {
  res.status(200).send('');
};