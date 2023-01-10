import axios from "axios";
import environment from "../../config/environment";

const httpClient = axios.create({
  baseURL: environment.pokAPI,
});

export default httpClient;
