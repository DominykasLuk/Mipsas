import axios from "axios";
import {ADD_STUDY, DELETE_STUDY, GET_STUDIES, STUDIES_ERROR} from "./types";

export const getStudies = () => async dispatch =>
{
    try {
        const res = await axios.get('/api/studies')
        dispatch({
            type:GET_STUDIES,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:STUDIES_ERROR,
            payload:{
                msg:error.response.statusText,
                status:error.response.status
            }
        })
    }
}

export const addStudy = () => async dispatch =>
{
    try {
        const res = await axios.post('/api/study')
        dispatch({
            type:ADD_STUDY,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:STUDIES_ERROR,
            payload:{
                msg:error.response.statusText,
                status:error.response.status
            }
        })
    }
}

//delete
export const deleteStudy = studyId => async dispatch =>
{
    try {
        await axios.delete(`/api/study/${studyId}`);
        dispatch({
            type:DELETE_STUDY,
            payload:studyId
        })
    } catch (error) {
        dispatch({
            type:STUDIES_ERROR,
            payload:{
                msg:error.response.statusText,
                status:error.response.status
            }
        })
    }
}

