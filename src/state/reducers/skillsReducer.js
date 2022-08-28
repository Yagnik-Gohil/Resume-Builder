const skillReducer = (skills=[], action) => {
    switch(action.type){
        case "ADD_SKILL":
            return [ ...skills, action.payload];
        case "REMOVE_SKILL":
            let arr = [...skills]
            arr.splice(action.payload, 1);
            return arr;
        default:
            return skills;
    }
}
export default skillReducer