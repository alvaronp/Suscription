'use strict';


/**
 * Delete active suscription
 * This can only be done by the logged in user.
 *
 * userId Integer ID of the user that need his suscription to be deleted
 * no response value expected for this operation
 **/
exports.deleteSuscription = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user suscription info
 * Returns the active suscription data
 *
 * userId Integer ID of the user that need to see his suscription info
 * returns Suscription
 **/
exports.getAuthor = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all active suscriptions info
 * Returns all active suscriptions data
 *
 * returns List
 **/
exports.getNSubs = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
}, {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * New suscription
 * Creates a new suscription for a Bookify's user
 *
 * userId Integer The user ID to suscribe
 * returns Suscription
 **/
exports.newSub = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "endDate" : "16/12/2022",
  "price" : 5.49,
  "userId" : 1,
  "startDate" : "16/11/2022"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update suscription data
 * This can only be done by the logged in user.
 *
 * body Suscription Update an existent user suscription (optional)
 * userId Integer ID of the user that need his suscription to be updated
 * no response value expected for this operation
 **/
exports.updateAuthor = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update suscription data
 * This can only be done by the logged in user.
 *
 * body Suscription Update an existent user suscription (optional)
 * userId Integer ID of the user that need his suscription to be updated
 * no response value expected for this operation
 **/
exports.updateAuthor = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

