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

export default api;
