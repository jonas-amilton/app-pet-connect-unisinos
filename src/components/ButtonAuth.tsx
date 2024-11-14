import React from "react";
import { IonButton } from "@ionic/react";

interface ButtonAuthProps {
  buttonText: string;
}

function ButtonAuth({ buttonText }: ButtonAuthProps) {
  return (
    <>
      <IonButton type="submit" expand="full">
        {buttonText}
      </IonButton>
    </>
  );
}
export default ButtonAuth;
