import axios from 'axios';

export const ADD_PLANTER = 'ADD_PLANTER'
export const GET_ALL_PLANTERS = 'GET_ALL_PLANTERS'
export const DELETE_PLANTER = 'DDELETE_PLANTER'
export const UPDATE_PLANTER = 'UPDATE_PLANTER'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const PLANTER_BY_SHAPE='PLANTER_BY_SHAPE'
const BASE_URL = 'http://localhost:9191/nursery/'

const getAllPlantersAction = (data) => {
    return {
        type: GET_ALL_PLANTERS,
        data
    }
}
export const getAllPlanters = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllPlantersAction(response.data))
            })
    }
}
const addPlanterAction = (data) => {
    return {
        type: ADD_PLANTER,
        data
    }
}

export const addPlanter = (newPlanter) => {
    return (dispatch) => {
        axios.post(BASE_URL, newPlanter)
            .then((response) => {dispatch(addPlanterAction(response.data))}).catch((err) => console.log(err.response));
            
    }
}


const deletePlanterAction = (data) => {
    return {
        type: DELETE_PLANTER,
        data
    }
}

export const deletePlanter = (planterId) => {
    return (dispatch) => {
        axios.delete(BASE_URL + planterId)
            .then((response) => {
                dispatch(deletePlanterAction(response.data))
            })
    }
}

const updatePlanterAction = (data) => {
    return {
        type: UPDATE_PLANTER,
        data
    }
}

export const updatePlanter = (planterId, newPlanterDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL + planterId, newPlanterDetails)
            .then((response) => {
                dispatch(updatePlanterAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

const planterByShapeAction=(data)=>{
    return {
        type: PLANTER_BY_SHAPE,
        data
    }
}

export const viewPlanterByShape=(planterShape)=>{
    return (dispatch) => {
        let url=`http://localhost:9191/nursery/search?planterShape=${planterShape}`
        axios.get(url)
            .then((response) => {
                dispatch(planterByShapeAction(response.data))
            })
    }
}


