import axios from "axios";

axios.defaults.baseURL = "https://65c50ccadae2304e92e3e0a4.mockapi.io/api";

export async function fetchAll() {
  const { data } = await axios.get("/adverts");
  return data;
}
