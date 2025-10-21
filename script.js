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
    const newPost = {
      title: "Tytul",
      body: "Treść",
      userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(data => {
        answer.innerHTML = `
          <div class="post">
            <h3>${data.id}. ${data.title}</h3>
            <p>${data.body}</p>
          </div>
        `;
      })
      .catch(error => {
        answer.innerHTML = "Błąd";
      });
  })

  cw3.addEventListener("click", function() {
    //TODO
  })

})();
