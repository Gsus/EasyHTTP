/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0.0
 * @author  Jesús Sánchez Bello
 * @license MIT
 *
 **/

// Use AJAX to make HTTP requests
function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make GET request
EasyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  this.http.onload = function () {
    if (this.status === 200) {
      callback(null, this.responseText);
    } else {
      callback("Error: " + this.status);
    }
  };

  this.http.send();
};

// Make POST request
EasyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  this.http.onload = function () {
    callback(null, this.responseText);
    console.log(this.responseText);
  };

  if (typeof data === "string") {
    // If the data is already a JSON string, send it as it is
    this.http.send(data);
  } else {
    // If it's a JS object, send it as a JSON string
    this.http.send(JSON.stringify(data));
  }
};

// Make PUT request
EasyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  this.http.onload = function () {
    callback(null, this.responseText);
    console.log(this.status);
  };

  if (typeof data === "string") {
    // If the data is already a JSON string, send it as it is
    this.http.send(data);
  } else {
    // If it's a JS object, send it as a JSON string
    this.http.send(JSON.stringify(data));
  }
};

// Make DELETE request
EasyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = function () {
    if (this.status === 200) {
      callback(null, "Post deleted");
    } else {
      callback("Error: " + this.status);
    }
  };

  this.http.send();
};
