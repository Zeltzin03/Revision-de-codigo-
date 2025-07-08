const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//selecctores correctos
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//faltaba función
async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  //validar
  if (!response.ok){
    throw new Error(`Error HTTP: ${response.status}`);
  }
  const data = await response.json();//convertir datos a JSON
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}catch (error){
    handleError(err);
}
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);