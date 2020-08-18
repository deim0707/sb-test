import {createStore} from "redux";
import reducerProjects from "./reducer";

const store = createStore(
    reducerProjects
);

export default store;