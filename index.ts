import App from "./src/App.svelte";
import { initialize, type Options } from "poxi";
import { onCreate } from "./src/state";

const options: Options = {
  app: () => App,
  settings: () => import("./src/Settings.svelte"),
  onCreate: onCreate,
};

initialize(options);
