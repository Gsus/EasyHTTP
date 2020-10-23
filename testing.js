// ======== For the record, this code is all about testing the library ======
// === The actual library is the "easyhttp.js" file ===

// ============== AJAX testing===========================

// const http = new EasyHTTP;
// Get posts
// http.get("https://jsonplaceholder.typicode.com/todos/", (err, posts) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Testing POST requests with an external local file
// let jojo;

// http.get("./test.json", (err, data) => {
//   console.log(data);
//   console.log(typeof data);

//   // Data as a JSON string
//   // jojo = data;

//   // Data as an object
//   jojo = JSON.parse(data);
//   console.log(jojo);

//   // Post a post? lol
//   http.post("https://jsonplaceholder.typicode.com/posts/", jojo, function (
//     err,
//     post
//   ) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   });
// });

// let data;
// data = {
//   名前: "ディオ・ブランドー",
//   スタンド: "ザ・ワールド",
// };

// Testing updating
// http.put("https://jsonplaceholder.typicode.com/posts/2", data, (
//   err,
//   post
// ) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// Updating data value. Testing PUT requests with an external local file
// http.get("./test.json", (err, newData) => {
//     data = newData;
//     http.put("https://jsonplaceholder.typicode.com/posts/2", data, (
//       err,
//       post
//     ) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
//     });
// });

// Delete post
// http.delete("https://jsonplaceholder.typicode.com/posts/2", (
//   err,
//   response
// ) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// =================================================


// ================= Fetch API testing ====================

// const http = new EasyHTTP;

// Get users 
// const users = 
// http.get("https://jsonplaceholder.typicode.com/users/")
// .then(data => console.log(data))
// .catch(err => console.log(err))

// let user = {
//   名前: "ディオ・ブランドー",
//   スタンド: "ザ・ワールド",
// };

// Post an user
// http.post("https://jsonplaceholder.typicode.com/users/", user)
// .then(response => console.log(response))
// .catch(err => console.log(err));

// Update an user
// http.put("https://jsonplaceholder.typicode.com/users/1", user)
// .then(updatedUser => console.log(updatedUser))
// .catch(err => console.log(err));

// Delete an user
// http.delete("https://jsonplaceholder.typicode.com/users/1")
// .then(message => console.log(message))
// .catch(err => console.log(err))

// ========================================================

// ===================== Async Await testing =================
// const http = new EasyHTTP;

// Get users
// http.get("https://jsonplaceholder.typicode.com/users/")
// .then(res => console.log(res))
// .catch(err => console.error(err));

// http.get("https://jsonplaceholder.typicode.com/users/")
// .then(users => {
//   console.log(users);
//   for (let user of users) {
//     console.log(user.name);
//   }
// })
// .catch(err => console.error(err));

// Data to POST/PUT
// const data = {
//   名前: "ディオ・ブランドー",
//   スタンド: "ザ・ワールド",
// };

// Post an user
// http.post("https://jsonplaceholder.typicode.com/users/", data)
// .then(response => console.log(response))
// .catch(err => console.error(err));

// Update an user
// http.put("https://jsonplaceholder.typicode.com/users/5", data)
// .then(res => console.log(res))
// .catch(err => console.error(err));

// Delete an user
// http.delete("https://jsonplaceholder.typicode.com/usrs/5")
// .then(res => console.log(res))
// .catch(err => console.error(err));