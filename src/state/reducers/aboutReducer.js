const aboutReducer = (about="", action) => {
    switch(action.type){
        case "MANAGE_ABOUT":
            return action.payload;
        default:
            return about;
    }
}
export default aboutReducer