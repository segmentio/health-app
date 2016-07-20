'use strict';

var assert = require('assert');
var Health = require('../lib');
var express = require('express');
var request = require('supertest');

describe('health-app', function (done) {
  describe('GET /health', function () {
    it('should return 200', function (done) {
      var subapp = new Health().app();
      var app = express().use('/', subapp);
      request(app)
        .get('/health')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /internal/health', function () {
    it('should return 200', function (done) {
      var subapp = new Health().app();
      var app = express().use('/', subapp);
      request(app)
        .get('/internal/health')
        .expect(200)
        .end(done);
    });
  });
});
