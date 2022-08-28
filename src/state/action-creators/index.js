export const addSkill = (skill) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_SKILL",
            payload: skill
        })
    }
}

export const removeSkill = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_SKILL",
            payload: index
        })
    }
}

export const manageFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_FILE",
            payload: file
        })
    }
}

export const manageAbout = (about) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_ABOUT",
            payload: about
        })
    }
}

export const manageProfile = (profile) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_PROFILE",
            payload: profile
        })
    }
}

export const addExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EXPERIENCE",
            payload: form
        })
    }
}
export const editExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EXPERIENCE",
            payload: form
        })
    }
}

export const removeExperience = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EXPERIENCE",
            payload: index
        })
    }
}

export const addEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EDUCATION",
            payload: form
        })
    }
}
export const editEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EDUCATION",
            payload: form
        })
    }
}

export const removeEducation = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EDUCATION",
            payload: index
        })
    }
}