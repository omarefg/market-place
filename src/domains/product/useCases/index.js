import { getAllProductsBuilder } from "./productUseCases";

export default function productUseCasesBuilder(params) {
  return {
    getAllProducts: getAllProductsBuilder(params),
  };
}
