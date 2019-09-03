import axios from "axios";
import { store } from "../store/";
const api = "";

export class APIService {
  constructor() {}
  getProductos() {
    const url = `${api}/producto`;
    return axios.get(url).then(res => res);
  }
  getProducto(ids) {
    const url = `${api}/producto/${ids}`;
    return axios.get(url).then(res => res);
  }
  deleteProducto(ids) {
    const url = `${api}/producto/delete/${ids}`;
    return axios.get(url).then(res => res);
  }
  updateProducto(ids) {
    const url = `${api}/producto/update/${ids}`;
    return axios.get(url).then(res => res);
  }
  postProducto(datos) {
    if (store.getters.isLoggedIn) {
      const url = `${api}/producto`;
      return axios.post(url, datos).then(res => res);
    }
  }
}
