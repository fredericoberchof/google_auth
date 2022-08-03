import { GoogleLogo } from "phosphor-react";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"

import "./styles.scss";

export function SignIn() {

  function handleGoogleSignIn() {

  }

  return (
    <div className="container">
      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autenticacao social, por exemplo, autenticacao com a Google,
        voce <br />
        facilita a vida do usuario, permitindo utilizar sua aplicacao sem fazer
        cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        {" "}
        <GoogleLogo /> Entrar com Google
      </button>
    </div>
  );
}
