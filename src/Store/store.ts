import { createStore } from "redux";
import projectsReducer from "./reducer";

const store = createStore(projectsReducer);

export default store;