import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import Carousel from "../components/Carousel";
import { getPetPhoto, getPets } from "../services/apiService";

const Home: React.FC = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        setPets(response.data);
      } catch (error: any) {
        throw new Error("Erro ao buscar pets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Carousel />
        {loading ? (
          <p>Carregando lista de pets...</p>
        ) : (
          <IonGrid fixed={false}>
            <IonRow>
              {pets.length === 0 ? (
                <p>Nenhum pet encontrado</p>
              ) : (
                pets.map((pet, index) => (
                  <IonCol key={index}>
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src={getPetPhoto(pet.photo)}
                        height={"100vh"}
                        width={"100%"}
                      />
                      <IonCardHeader style={{ flexDirection: "column" }}>
                        <IonCardTitle style={{ fontWeight: "lighter" }}>
                          {pet.name}
                        </IonCardTitle>
                        <IonCardSubtitle>
                          {pet.age}|{pet.size}
                        </IonCardSubtitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                ))
              )}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
