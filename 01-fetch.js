// NODE
// Allows you to run JS out of the browser

// SERVERS for example

console.log("Hello worlddsadsadsadsa!");

// APIs
// ASYNC CODE
fetch("https://robots-api.adaptable.app/all-robots")
  .then((response) => {
    return response.json(); // the return in the then is going to be the argument in the next then
  })
  .then((jsonResponse) => console.log(jsonResponse))
  .catch((error) => console.log(error));

// This line is not going to wait for the thens
console.log("HEYYYYYY");
