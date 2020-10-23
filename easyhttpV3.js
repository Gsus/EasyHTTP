/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Jesús Sánchez Bello
 * @license MIT
 *
 **/

class EasyHTTP {

  // Make a GET request
  async get(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.status);
      } 

      const resData = await response.json();
  
      return resData; 
    
    } catch (err) {
      throw new Error(`Something went wrong... Status: ${err.message}`);
    }
  }

  // Make a POST request
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(response.status);
      } 

      const resData = await response.json();
  
      return resData; 
    
    } catch (err) {
      throw new Error(`Something went wrong... Status: ${err.message}`);
    }
  }

  // Make a PUT request
  async put(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(response.status);
      } 

      const resData = await response.json();
  
      return resData; 
    
    } catch (err) {
      throw new Error(`Something went wrong... Status: ${err.message}`);
    }
  }

  // Make a DELETE request
  async delete(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      return `Successfully deleted. Status: ${response.status}`;
    
    } catch (err) {
      throw new Error(`Something went wrong... Status: ${err.message}`);
    }
  }
}