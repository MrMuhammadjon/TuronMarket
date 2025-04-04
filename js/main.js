// js/pages/blog.js
fetch('../data/blog.json')
  .then(response => response.json())
  .then(data => {
    const blogContainer = document.querySelector('.blog-list');
    data.forEach(post => {
      const blogHTML = `
        <div class="blog-card">
          <img src="${post.image}" alt="${post.title}" />
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <small>By ${post.author} - ${post.date}</small>
        </div>
      `;
      blogContainer.innerHTML += blogHTML;
    });
  });
