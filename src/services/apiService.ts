import axios from "axios";

const api = axios.create({
  baseURL: "https://api-pet-connect-unisinos.onrender.com",
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/users/login", { email, password });

    return response;
  } catch (error: string | any) {
    console.log("error in login", error);
    throw error;
  }
};

export const register = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await api.post("/users/register", {
      email,
      username,
      password,
      isAdmin: false,
    });

    return response;
  } catch (error: string | any) {
    console.log("error in register", error);
    throw error;
  }
};

export const getPets = async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar pets:", error);
    throw error;
  }
};

export default api;
