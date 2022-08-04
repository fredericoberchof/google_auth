import { useState } from "react";
import { GoogleLogo } from "phosphor-react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./styles.scss";

export function SignIn() {
const [user, setUser] = useState<User>({} as User)

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="user">
       {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
       <strong>{user.displayName}</strong>
       <small>{user.email}</small>
      </div>

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
