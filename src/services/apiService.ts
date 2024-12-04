import axios from "axios";

const api = axios.create({
  baseURL: "https://api-pet-connect-unisinos-v2.onrender.com/api/pet-connect",
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { email, password });

    return response;
  } catch (error: string | any) {
    throw error;
  }
};

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await api.post("/auth/register", {
      email,
      username,
      password,
      isAdmin: false,
    });

    return response;
  } catch (error: string | any) {
    throw error;
  }
};

export const getPets = async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const addPet = async (
  name: string,
  age: string,
  size: string,
  photo: File
) => {
  try {
    const formData = new FormData();

    if (!photo) {
      alert("Por favor, selecione uma foto para o pet.");
      return;
    }

    formData.append("name", name);
    formData.append("age", age);
    formData.append("size", size);
    formData.append("photo", photo);

    const response = await api.post("/pets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getPetPhoto = (petId: string) => {
  try {
    return `${api.defaults.baseURL}/pets/${petId}/images`;
  } catch (error: any) {
    console.error("Erro ao carregar a imagem:", error);
    return "";
  }
};

export default api;
