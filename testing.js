// ======== For the record, this code is all about testing the library ======
// === The actual library is the "easyhttp.js" file ===

const http = new EasyHTTP();

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
