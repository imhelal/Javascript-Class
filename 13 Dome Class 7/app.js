let postGrid = document.querySelector(".post-grid");

let posts = [
  {
    title: "Post 1",
    author: "Jhon Deo",
    description: "This is post description",
    like: 53,
  },
  {
    title: "Post 2",
    author: "Kazi Nazrul",
    description: "This is post description",
    like: 72,
  },
  {
    title: "Post 3",
    author: "Robindro Nath",
    description: "This is post description",
    like: 46,
  },
  {
    title: "Post 4",
    author: "Joshim Uddin",
    description: "This is post description",
    like: 88,
  },
];

posts.forEach(function (post) {
  renderHtml(post);
});

function renderHtml(postObject) {
  let html = `<div class="post-item">
  <h1>${postObject.title}</h1>
  <h4>${postObject.author}</h4>
  <p>
    ${postObject.description}
  </p>
  <p>Likes: ${postObject.like}</p>
</div>`;
  postGrid.innerHTML += html;
}
