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
    var examples = [ {
      "endDate" : "16/12/2022",
      "price" : 5.49,
      "userId" : 1,
      "startDate" : "16/11/2022"
    }, {
      "endDate" : "14/12/2022",
      "price" : 5.49,
      "userId" : 2,
      "startDate" : "14/11/2022"
    }, {
      "endDate" : "12/12/2022",
      "price" : 5.49,
      "userId" : 3,
      "startDate" : "12/11/2022"
    }, {
      "endDate" : "21/12/2022",
      "price" : 5.49,
      "userId" : 4,
      "startDate" : "21/11/2022"
    }];
    if (userId < 5) {
      resolve([JSON.stringify("SUSCRIPCIÓN DEL USUARIO " + userId + " CANCELADA"),examples[userId-1]]);
    } else {
      reject(JSON.stringify("No hay usuarios con ese ID"));
    }
  });
}


/**
 * Get user suscription info
 * Returns the active suscription data
 *
 * userId Integer ID of the user that need to see his suscription info
 * returns Suscription
 **/
exports.getSuscription = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = [ {
      "endDate" : "16/12/2022",
      "price" : 5.49,
      "userId" : 1,
      "startDate" : "16/11/2022"
    }, {
      "endDate" : "14/12/2022",
      "price" : 5.49,
      "userId" : 2,
      "startDate" : "14/11/2022"
    }, {
      "endDate" : "12/12/2022",
      "price" : 5.49,
      "userId" : 3,
      "startDate" : "12/11/2022"
    }, {
      "endDate" : "21/12/2022",
      "price" : 5.49,
      "userId" : 4,
      "startDate" : "21/11/2022"
    }];
    if (userId < 5) {
      resolve([JSON.stringify("SUSCRIPCIÓN ACTIVA DEL USUARIO " + userId),examples[userId-1]]);
    } else {
      reject(JSON.stringify("No hay usuarios con ese ID"));
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
  "endDate" : "14/12/2022",
  "price" : 5.49,
  "userId" : 2,
  "startDate" : "14/11/2022"
}, {
  "endDate" : "12/12/2022",
  "price" : 5.49,
  "userId" : 3,
  "startDate" : "12/11/2022"
}, {
  "endDate" : "21/12/2022",
  "price" : 5.49,
  "userId" : 4,
  "startDate" : "21/11/2022"
} ];
  resolve(examples);
  });
}


/**
 * New suscription
 * Creates a new suscription for a Bookify's user
 *
 * body The user ID to suscribe
 * returns Suscription
 **/
exports.newSub = function(body) {
  const date = new Date();
  let day = date.getDate() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  let dateMonth;
  if(month == 12){
    dateMonth = `${day}/${1}/${year+1}`;
  }
  else{
    dateMonth = `${day}/${month+1}/${year}`;

  }
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "endDate" : dateMonth,
      "price" : 5.49,
      "userId" : body.id,
      "startDate" : currentDate
    };
    if (body.id < 5) {
      resolve([JSON.stringify("NUEVA SUSCRIPCIÓN DEL USUARIO " + body.id),examples]);
    } else {
      reject(JSON.stringify("No hay usuarios con ese ID"));
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
exports.updateSuscription = function(body,userId) {
  return new Promise(function(resolve, reject) {
    if (userId == body.userId) {
      resolve([JSON.stringify("MODIFICACIÓN DE SUSCRIPCIÓN DEL USUARIO " + userId),body]);
    } else {
      reject(JSON.stringify("No puedes cambiar tu ID"));
    }
  });
}

