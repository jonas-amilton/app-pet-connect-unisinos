import React, { useState } from "react";
import { IonInput } from "@ionic/react";

interface InputPasswordProps {
  value: string;
  onChange: (e: CustomEvent) => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({ value, onChange }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validatePassword(value) ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonInput
      className={`${isValid && "ion-valid"} ${
        isValid === false && "ion-invalid"
      } ${isTouched && "ion-touched"}`}
      type="password"
      fill="solid"
      label="Senha"
      labelPlacement="floating"
      helperText="Digite uma senha válida"
      errorText="Senha inválida"
      onIonInput={(event) => onChange(event)}
      onIonBlur={() => markTouched()}
      value={value}
    />
  );
};

export default InputPassword;
