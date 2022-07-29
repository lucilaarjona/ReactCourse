//REST
// endpoint https://jsonplaceholder.typicode.com/users/1
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) //la convierte en json
  .then((data) => {
    console.log(data);
  });