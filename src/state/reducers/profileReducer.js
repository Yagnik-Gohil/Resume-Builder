const profileReducer = (profile={
    name: "Your Name",
    location: "City, Name",
    github: "",
    linkedin: "",
    website: "",
    email: "",
    contact: "",
    position: "Your Position",
    tagline: "Describe yourself in one line"
}, action) => {
    switch(action.type){
        case "MANAGE_PROFILE":
            return action.payload;
        default:
            return profile;
    }
}
export default profileReducer