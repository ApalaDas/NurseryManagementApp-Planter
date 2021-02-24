import * as actionCreators from '../actions/actions';

const initialState = {
    returnedMessage: 'empty msg',
    planterList: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionCreators.GET_ALL_PLANTERS:
            let listOfPlanters = action.data
            console.log('List of Planters')
            console.log(listOfPlanters)
            return {
                returnedMessage: 'Planters available right now !! ',
                planterList: listOfPlanters
            }

        case actionCreators.DELETE_PLANTER:
            let messageAfterDeletion = action.data.message
            let listAfterDeletion = action.data.planters
            console.log('Deletion of employee')
            console.log(listAfterDeletion)
            console.log(messageAfterDeletion)
            return {
                returnedMessage: messageAfterDeletion,
                planterList: listAfterDeletion
            }

        case actionCreators.ADD_PLANTER:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.planters
            console.log('Addition of planter')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                planterList: listAfterAddition
            }
            
            
        case actionCreators.PLANTER_BY_SHAPE:
            let msg= action.data.message
            let planterByShape = action.data.planters
            console.log('List of Planters by shape')
            console.log(msg)
            console.log(planterByShape)
            return {
                returnedMessage:msg,
                planterList: planterByShape
            }

        case actionCreators.UPDATE_PLANTER:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.planters
            console.log('Updating planters')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                planterList: listAfterUpdation
            }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                planterList: []
            }

        
        default:
            return state
    }
}

export default reducer;