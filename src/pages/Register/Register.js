// import logica do compoenente
import { useState, useEffect } from "react";

// style - css
import styles from "../Register/Register.module.css";

const Register = () => {
    // dados a receber...
    const [displayName, setDisplayname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]  = useState("");
    const [error, setError] = useState("");

    // enviar dados...
   const handleSubmit =  (event) => {
    event.preventDefault(); 

    // zerar erros 
    setError("");

    // objeto de envio 
     const user = {
        displayName,
        email,
        password
     }
 
     // validar senhas...
     if (password !== confirmPassword) {
        setError("As senhas precisam ser iguais!");
     }

     console.log(user);
   }; 

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar </h1>
        <p>Crie seu Usuario e compartilhe suas historias</p> 
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input
                type="text"
                name="displayName"
                required placeholder="Nome do usuário"
                value={displayName}
                onChange={(event) => setDisplayname(event.target.value) } 
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                type="email"
                name="email"
                required placeholder="Email do usuário"
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
                />
            </label>
            <label>
                <span>Senha:</span>
                <input
                type="password"
                name="Password"
                required placeholder="Insira sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input
                type="password"
                name="confirmPassword"
                required placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </label>
            <button className="btn">Cadastrar</button>
            {error && <p className="error">{error}</p> }
        </form>
    </div>
  )
}

export default Register;