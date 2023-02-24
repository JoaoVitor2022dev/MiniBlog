// import logica do compoenente
import { useState, useEffect } from "react";

// style - css
import styles from "../Register/Register.module.css";

const Register = () => {
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu Usuario e compartilhe suas historias</p> 
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Nome do usuário" />
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="Email do usuário" />
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="Password" required placeholder="Insira sua senha" />
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" />
            </label>
            <button className="btn">Cadastrar</button>
        </form>
    </div>
  )
}

export default Register;