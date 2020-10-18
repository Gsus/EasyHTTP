// ======== For the record, this code is all about testing the library ======
// === The actual library is the "easyhttp.js" file ===

const http = new EasyHTTP();

// Get posts
http.get("https://jsonplaceholder.typicode.com/todos/", function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

let jojo;

http.get("./test.json", function (err, data) {
  console.log(data);
  console.log(typeof data);

  // Data as a JSON string
  // jojo = data;

  // Data as an object
  jojo = JSON.parse(data);
  console.log(jojo);

  // Post a post? lol
  http.post("https://jsonplaceholder.typicode.com/posts/", jojo, function (
    err,
    post
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });
});
