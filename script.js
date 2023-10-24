let joke = document.querySelector(".g");

async function getJoke() {
  let getting = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: " application/json",
    },
  });
  let res = await getting.json();
  let jk = res.joke;
  joke.innerHTML = jk;
}

getJoke();

// Explanation to Code
// /* The code above is a simple JavaScript program that uses the Fetch API and async-await syntax to make an HTTP request to the
