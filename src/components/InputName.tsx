import React, { useState } from "react";
import { IonInput } from "@ionic/react";

interface InputNameProps {
  value: string;
  onChange: (e: CustomEvent) => void;
}

const InputName: React.FC<InputNameProps> = ({ value, onChange }) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateName = (name: string) => {
    return name.length >= 3;
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateName(value) ? setIsValid(true) : setIsValid(false);
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
      label="Nome"
      labelPlacement="floating"
      helperText="Digite um nome válido"
      errorText="Nome inválido"
      onIonInput={(event) => onChange(event)}
      onIonBlur={() => markTouched()}
      value={value}
    />
  );
};

export default InputName;
