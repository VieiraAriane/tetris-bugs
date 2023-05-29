export function Erros(message) {
  switch (message) {
    case "Incorrect password":
      return "Senha incorreta!";
    case "Cannot find user":
      return "Usuário não encontrado!";
    case "Email and password are required":
      return "Por favor, preencha todos os campos!";
    default:
      return "Ops, ocorreu algum erro!";
  }
}
