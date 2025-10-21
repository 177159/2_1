(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw1Input = document.getElementById("cw1Input")
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function() {

    answer.innerHTML = "<p>Loading...</p>"

    if (cw1Input.value.length != 0) {
      fetch("https://jsonplaceholder.typicode.com/posts/" + cw1Input.value)
        .then(response => response.json())
        .then(post => {
          console.log("Pobrano post:", post);

          let html = `
             <div class="post">
               <h3>${post.id}. ${post.title}</h3>
               <p>${post.body}</p>
             </div>
          `;
          answer.innerHTML = html;
        });
      return;
    };

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        console.log("Pobrano listę postów", posts);

        let html = "<h2>Lista postów</h2>";
        posts.forEach(post => {
          html += `
          <div class="post">
            <h3>${post.id}. ${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        });
        answer.innerHTML = html;
      })
  })

  cw2.addEventListener("click", function() {
    //TODO
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
