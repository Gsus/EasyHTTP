const http = new EasyHTTP();

// Get posts
const posts = http.get("https://jsonplaceholder.typicode.com/todos/", function (
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
