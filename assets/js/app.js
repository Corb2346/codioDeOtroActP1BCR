const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');//se quita el # debido a que es una classe y no id
const $l = document.querySelector('location');//se agrega en el html un p que refiere a class location ademas  se quita el .location

/* async */ function displayUser(username) { //como se usa await se debe usar async al inicio de una funcion
  $n.textContent = `cargando...`;
  /* const response = await  */fetch(`${usersEndpoint}/${username}`) // se agregó el then que sirve de fetch
    .then(response => response.json())
    .then(data => console.log(data));

console.log(response);
  $n.textContent =  `${response.name}`;
  $b.textContent = `${response.blog}`;
  $l.textContent = `${response.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);