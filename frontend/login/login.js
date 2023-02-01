
const response = await fetch("http://localhost:8092/usuario", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email.value,
      senha: senha.value,
    }),
  })
    .then(async (response) => {
      const resposta = await response.json();
      const idUsuario = await response.idUsuario;
      const email = await response.email;
      const tipoUsuario = await response.idTipoUsuario;

      localStorage.setItem("idTipoUsuario", resposta.tipoUsuario.idTipoUsuario);
      localStorage.setItem("email", resposta.email);
      localStorage.setItem("idUsuario", resposta.idUsuario);
      
      const idTipoUsuario = localStorage.getItem("idTipoUsuario");

      console.log(idTipoUsuario);
      
     if (idTipoUsuario == 1) {
        window.location.replace("http://127.0.0.1:5501/frontend/visaoCliente/agendarServico.html")
      } else if (idTipoUsuario == 2) {
        window.location.replace("http://127.0.0.1:5501/frontend/visaoPrestador/meusServicosPrestador.html")
      }
    })
    .catch((erro) => {
      console.error(erro);
    });
