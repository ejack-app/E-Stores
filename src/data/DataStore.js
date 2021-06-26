import { CreateStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const SportsStoreDataStore = CreateStore(ShopReducer);