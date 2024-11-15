import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import ButtonAuth from "../components/ButtonAuth";
import { register } from "../services/apiService"; // Caminho correto do arquivo
import InputUsername from "../components/InputUsername";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await register(email, username, password);
      alert("Usuário registrado com sucesso, faça login!");
      console.log(response);

      window.location.href = "/login";
    } catch (error: any) {
      setError("Erro ao registrar usuário, tente novamente.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonCard>
      <img
        alt="Banner da tela de registro de usuário"
        src="/images/banner-register.jpg"
        style={{
          aspectRatio: "4/3",
          height: "30vh",
          width: "100%",
        }}
      />
      <IonCardHeader>
        <IonCardTitle style={{ textAlign: "center" }}>Pet Connect</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <form onSubmit={handleRegister}>
          <InputUsername
            value={username}
            onChange={(event: CustomEvent) => setUsername(event.detail.value)}
          />
          <InputEmail
            value={email}
            onChange={(event: CustomEvent) => setEmail(event.detail.value)}
          />
          <InputPassword
            value={password}
            onChange={(event: CustomEvent) => setPassword(event.detail.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ButtonAuth
            buttonText={loading ? "Cadastrando usuário..." : "Criar conta"}
          />
        </form>
        <Link
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1em",
          }}
          to="/login"
        >
          Já tem conta? Faça login
        </Link>
      </IonCardContent>
    </IonCard>
  );
}

export default Register;
