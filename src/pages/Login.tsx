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
import { login } from "../services/apiService";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await login(email, password);

      alert("Login realizado com sucesso" + response);

      // window.location.href = '/home';
    } catch (error: any) {
      setError(
        "Erro ao realizar login, verifique seus dados e tente novamente."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonCard>
      <img
        alt="Banner da tela de login"
        src="/images/banner-login.jpg"
        style={{
          aspectRatio: "4/3",
          height: "40vh",
          width: "100%",
        }}
      />
      <IonCardHeader>
        <IonCardTitle style={{ textAlign: "center" }}>Pet Connect</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <form onSubmit={handleSubmit}>
          <InputEmail
            value={email}
            onChange={(event: CustomEvent) => setEmail(event.detail.value)}
          />
          <InputPassword
            value={password}
            onChange={(event: CustomEvent) => setPassword(event.detail.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <ButtonAuth buttonText={loading ? "Carregando..." : "Acessar"} />
        </form>
      </IonCardContent>
    </IonCard>
  );
}
export default Login;
