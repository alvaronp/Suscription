'use strict';

var utils = require('../utils/writer.js');
var Suscription = require('../service/SuscriptionService');

module.exports.deleteSuscription = function deleteSuscription (req, res, next, userId) {
  Suscription.deleteSuscription(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSuscription = function getSuscription (req, res, next, userId) {
  Suscription.getSuscription(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNSubs = function getNSubs (req, res, next) {
  Suscription.getNSubs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newSub = function newSub (req, res, next, userId) {
  Suscription.newSub(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSuscription = function updateSuscription (req, res, next, body, userId) {
  Suscription.updateSuscription(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
