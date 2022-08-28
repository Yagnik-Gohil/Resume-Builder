const educationReducer = (list=[], action) => {
    switch(action.type){
        case "ADD_EDUCATION":
            return [ ...list, action.payload];
        case "EDIT_EDUCATION":
            let newArr = [...list]
            newArr[action.payload.id] = action.payload;
            return newArr;
        case "REMOVE_EDUCATION":
            let arr = [...list]
            arr.splice(action.payload, 1);
            return arr;
        default:
            return list;
    }
}
export default educationReducer