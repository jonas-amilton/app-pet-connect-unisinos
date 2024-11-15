import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonLabel,
} from "@ionic/react";
import Carousel from "../components/Carousel";
import { addPet } from "../services/apiService";

const AddPet: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [formError, setFormError] = useState<string>("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !age || !size || !photo) {
      setFormError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await addPet(name, age, size, photo);
      if (response.success) {
        alert("Pet cadastrado com sucesso!");

        window.location.href = "/home";
      } else {
        alert("Erro ao cadastrar pet: " + response.message);
      }
    } catch (error: any) {
      alert("Erro ao cadastrar pet.");

      throw new Error("Erro ao cadastrar pet:", error);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Adicionar Pet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Carousel />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: "center" }}>
              Pet Connect
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <form onSubmit={handleRegister}>
              <IonLabel position="stacked">Nome</IonLabel>
              <IonInput
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                placeholder="Digite o nome do pet"
                required
              />

              <IonLabel position="stacked">Idade</IonLabel>
              <IonSelect
                value={age}
                onIonChange={(e) => setAge(e.detail.value!)}
                placeholder="Selecione a idade"
              >
                <IonSelectOption value="Adulto">Adulto</IonSelectOption>
                <IonSelectOption value="Jovem">Jovem</IonSelectOption>
                <IonSelectOption value="Filhote">Filhote</IonSelectOption>
              </IonSelect>

              <IonLabel position="stacked">Porte</IonLabel>
              <IonSelect
                value={size}
                onIonChange={(e) => setSize(e.detail.value!)}
                placeholder="Selecione o porte"
              >
                <IonSelectOption value="Porte pequeno">
                  Porte pequeno
                </IonSelectOption>
                <IonSelectOption value="Porte médio">
                  Porte médio
                </IonSelectOption>
                <IonSelectOption value="Porte grande">
                  Porte grande
                </IonSelectOption>
              </IonSelect>

              <IonLabel position="stacked">Foto</IonLabel>
              <IonButton>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <label htmlFor="file-input">Escolher Foto</label>
              </IonButton>

              {formError && <div style={{ color: "red" }}>{formError}</div>}

              <IonButton expand="full" type="submit">
                Adicionar Pet
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default AddPet;
