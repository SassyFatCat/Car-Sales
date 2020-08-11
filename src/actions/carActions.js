export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (id) => {
return {
    type: ADD_FEATURE,
    payload: id
}
}

export const REM_FEATURE = 'REM_FEATURE';
export const remFeature = (id) => {
return {
    type: REM_FEATURE,
    payload: id
}
}