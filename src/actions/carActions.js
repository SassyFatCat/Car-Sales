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

export const CHANGE_CAR = 'CHANGE_CAR';
export const changeCar = (id) => {
return {
    type: CHANGE_CAR,
    payload: id
}
}