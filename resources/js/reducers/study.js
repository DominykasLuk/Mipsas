import {ADD_STUDY, DELETE_STUDY, GET_STUDIES, STUDIES_ERROR} from "../actions/types";



const initialState = {
    studies: [],
    loading:true,
    error:{}
}

export default function(state=initialState,action)
{
    const {type, payload} = action;

    switch(type)
    {
        case GET_STUDIES:
            return{
                ...state,
                studies:payload,
                loading:false
        }
        case ADD_STUDY:
            return{
                ...state,
                studies: [payload, ...state.studies],
                loading:false
        }
        case DELETE_STUDY:
            return{
                ...state,
                studies: state.studies.filter(study=> study.id !== payload),
                loading:false
            }
        default:
            return state;

    }
}
