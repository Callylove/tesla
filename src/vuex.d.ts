// src/vuex.d.ts
import { Store } from "vuex";
import { State } from "./store/types"; // Adjust the path as necessary

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
