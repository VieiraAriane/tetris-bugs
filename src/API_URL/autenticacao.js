
export const setTokenRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}
export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');



const Requisicao = (endPoint, method, headers, body) => {
  return fetch(`https://burger-queen-api-mock-mu.vercel.app${endPoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(body),
  })
  .then((response) => response.json())
  .then ((obj) => {
    if (obj.code){
      console.log(obj.message)
      throw (obj.message)
    }else {
      console.log(obj)
      return obj
    }
  })
  
}
export const Login = (email, password) => Requisicao('/login', 'POST', null, {
  email,
  password
})
