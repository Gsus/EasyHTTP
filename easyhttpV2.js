/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Jesús Sánchez Bello
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make a GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Something went wrong... Status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  // Make a POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Something went wrong... Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  // Make a PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Something went wrong... Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  // Make a DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE"
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Something went wrong... Status: ${res.status}`);
        } else {
          resolve(`Successfully deleted. Status: ${res.status}`);
        }
      })
      .catch(err => reject(err))
    })
  }
}