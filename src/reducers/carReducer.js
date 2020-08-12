import {ADD_FEATURE, REM_FEATURE, CHANGE_CAR} from '../actions/carActions';
import {cars} from '../components/cars';

export const carReducer = (state = cars.mustang, action) => {
switch(action.type) {
    case ADD_FEATURE: {
    const theFeature = state.additionalFeatures.find(item => item.id === action.payload)
    if (!state.car.features.find(item => item.id === action.payload)) {
        return {
            ...state,
            car: {
                ...state.car,
                features: [
                    ...state.car.features,
                    theFeature
                ]
            },
            additionalPrice: state.additionalPrice + 
                theFeature.price,
            additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload)
        }
    }
    return state
    }

    case REM_FEATURE: {
        const theFeature = state.car.features.find(item => item.id === action.payload)
        return {
            ...state,
            additionalFeatures: [
                ...state.additionalFeatures,
                theFeature
            ],
            car: {
                ...state.car,
                features: state.car.features.filter(item => item.id !== action.payload)
                
            },
            additionalPrice: state.additionalPrice - 
                theFeature.price,
        }
    }

    case CHANGE_CAR: {
        const whichCar = action.payload;
        state = cars[whichCar]
        return state
    }

    default:
        return state
}
}