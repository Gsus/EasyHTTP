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
// EasyHTTP.prototype.post = function (url, data) {
//   this.http.open("POST", url, true);

//   this.http.onload = function () {
//   };

//   this.http.send();
// };
// Make PUT request
// Make DELETE request
