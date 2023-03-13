export async function createUser(email, password) {
  // cosntruir un objeto con email y passport siguiendo en el endpoint /auth/register
  const user = {
    username: email,
    password: password,
  };

  // consumir el api sparrest utilizando un POST y enviando los datos que ha introducido el usuario
  const response = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }); 

  if (!response.ok) {
    throw new Error('Error al crear el usuario')
  }

   // gestionar la respuesta
}
