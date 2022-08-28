import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import aboutReducer from "./aboutReducer";
import profileReducer from "./profileReducer";
import experienceReducer from "./experienceReducer";
import educationReducer from "./educationReducer";
import fileReducer from "./fileReducer";

const reducers = combineReducers({
    skills: skillsReducer,
    file: fileReducer,
    about: aboutReducer,
    profile: profileReducer,
    experienceList: experienceReducer,
    educationList: educationReducer,
});

export default reducers