import { add } from "three/examples/jsm/libs/tween.module.js";

export const BASE_URL = "http://localhost/vintage-sneaker-DB/vintage-sneaker-master"

  const endpoints = {
    getProducts: `${BASE_URL}/getproduct.php`,
    addProduct: `${BASE_URL}/addproduct.php`,
  }

  
export default endpoints;