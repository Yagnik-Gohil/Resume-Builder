const experienceReducer = (list=[], action) => {
    switch(action.type){
        case "ADD_EXPERIENCE":
            return [ ...list, action.payload];
        case "EDIT_EXPERIENCE":
            let newArr = [...list]
            newArr[action.payload.id] = action.payload;
            return newArr;
        case "REMOVE_EXPERIENCE":
            let arr = [...list]
            arr.splice(action.payload, 1);
            return arr;
        default:
            return list;
    }
}
export default experienceReducer