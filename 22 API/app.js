// what is api
// How api works

//api endpoint
const postsAPI = "https://jsonplaceholder.typicode.com/posts";

// fetch data
fetch(postsAPI)
  .then(function (response) {
    // resovle the promise
    return response.json();
  })
  .then(function (posts) {
    // receive the data & loop through the data
    posts.forEach(function (item) {
      console.log(item.title);
    });
  });
