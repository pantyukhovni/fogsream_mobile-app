import { createStore } from "effector";
import { CatalogStore } from "./types";

const $form = createStore<CatalogStore>({ textInput: '' });

export { $form };