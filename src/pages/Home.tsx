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
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        const petsWithImages = await Promise.all(
          response.data.map(async (pet: any) => {
            const image = await getPetPhoto(pet.id);
            return { ...pet, imageData: image };
          })
        );
        setPets(petsWithImages);
      } catch (error: any) {
        setError("Erro ao buscar pets");
        // console.error("Error fetching pets:", error);
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
        ) : error ? (
          <p>{error}</p>
        ) : (
          <IonGrid fixed={false}>
            <IonRow>
              {pets.length === 0 ? (
                <p>Nenhum pet encontrado</p>
              ) : (
                pets.map((pet, index) => {
                  return (
                    <IonCol key={index}>
                      <IonCard>
                        <img
                          alt={pet.name}
                          src={pet.imageData}
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
                  );
                })
              )}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
