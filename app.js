// ======== For the record, this code is all about testing the library ======
// === The actual library is the "easyhttp.js" file ===

const http = new EasyHTTP();

// Get posts
// http.get("https://jsonplaceholder.typicode.com/todos/", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Testing POST requests with an external local file
// let jojo;

// http.get("./test.json", function (err, data) {
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

// let data = {
//   名前: "ディオ・ブランドー",
//   スタンド: "ザ・ワールド",
// };

// Updating data value. Testing PUT requests with an external local file
// http.get("./test.json", function (err, data) {
//   data = data;
// });

// Testing updating
// http.put("https://jsonplaceholder.typicode.com/posts/2", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/2", function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
