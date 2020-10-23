/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.1.0
 * @author  Jesús Sánchez Bello
 * @license MIT
 *
 **/

// Use AJAX to make HTTP requests
class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // Arrow functions use a "lexical this" so you have to repeat "this.http" instead of just "this" (since, it's the same initial "this")
  // Also thought about using ternary operators but for readability's sake... nah.

  // Make a GET request
  get(url, callback) {
    this.http.open("GET", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback("Error: " + this.http.status);
      }
    };

    this.http.send();
  }

  // Make a POST request
  post(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      callback(null, this.http.responseText);
      console.log(this.http.responseText);
    };

    if (typeof data === "string") {
      // If the data is already a JSON string, send it as it is
      this.http.send(data);
    } else {
      // If it's a JS object, send it as a JSON string
      this.http.send(JSON.stringify(data));
    }
  }

  // Make a PUT request
  put(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      callback(null, this.http.responseText);
      console.log(this.http.status);
    };

    if (typeof data === "string") {
      // If the data is already a JSON string, send it as it is
      this.http.send(data);
    } else {
      // If it's a JS object, send it as a JSON string
      this.http.send(JSON.stringify(data));
    }
  }
  
  // Make a DELETE request
  delete(url, callback) {
    this.http.open("DELETE", url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, "Post deleted");
      } else {
        callback("Error: " + this.http.status);
      }
    };

    this.http.send();
  }
}



