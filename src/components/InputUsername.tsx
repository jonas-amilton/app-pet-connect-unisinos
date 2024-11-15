import React, { useState } from "react";
import { IonInput } from "@ionic/react";

interface InputUsernameProps {
  value: string;
  onChange: (e: CustomEvent) => void;
}

const InputUsername: React.FC<InputUsernameProps> = ({ value, onChange }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateUsername = (username: string) => {
    return username.length >= 3;
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateUsername(value) ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonInput
      className={`${isValid && "ion-valid"} ${
        isValid === false && "ion-invalid"
      } ${isTouched && "ion-touched"}`}
      type="text"
      fill="solid"
      label="Nome de usuário"
      labelPlacement="floating"
      helperText="Digite um nome de usuário válido"
      errorText="Nome de usuário inválido"
      onIonInput={(event) => onChange(event)}
      onIonBlur={() => markTouched()}
      value={value}
    />
  );
};

export default InputUsername;
