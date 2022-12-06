import axios from "axios";
const API_URL = "https://rickandmortyapi.com/api";
class DataService {
  getCharacter(page: number) {
    return axios
      .get(API_URL + `/character/?page=${page}`)
      .then((response) => JSON.stringify(response.data));
  }
}
export default new DataService();
