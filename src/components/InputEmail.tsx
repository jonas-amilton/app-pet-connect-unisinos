import React, { useState } from "react";
import { IonInput } from "@ionic/react";

interface InputEmailProps {
  value: string;
  onChange: (e: CustomEvent) => void;
}

const InputEmail: React.FC<InputEmailProps> = ({ value, onChange }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    <IonInput
      className={`${isValid && "ion-valid"} ${
        isValid === false && "ion-invalid"
      } ${isTouched && "ion-touched"}`}
      type="email"
      fill="solid"
      label="Email"
      labelPlacement="floating"
      helperText="Digite um email válido"
      errorText="Email invalido"
      onIonInput={(event) => onChange(event)}
      onIonBlur={() => markTouched()}
      value={value}
    ></IonInput>
  );
};

export default InputEmail;
