import './styles.scss'

export function SignIn() {
  return (
    <div className="container">
      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autenticacao social, por exemplo, autenticacao com a Google,
        voce <br />
        facilita a vida do usuario, permitindo utilizar sua aplicacao sem fazer
        cadastro.
      </span>

      <button type="button" className="button"> Entrar com Google</button>
    </div>
  );
}
