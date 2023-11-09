import {
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT
} from './constants';

const initialState =  { // Данный state будет показывать нам состояние счетчика 
    value: 0
}

export const counterReducer = (state = initialState, action) => { // 1 функция Reducer говорит нам что, когда нам в action
    switch (action.type) { // 2 придет action и я посмотрю на его type 
        case COUNTER_INCREMENT: // 3 в зависимости от типа я буду формировать новый state
            return {
                ...state,
                value: state.value + 1
            }

        case COUNTER_DECREMENT: // 3 в зависимости от типа я буду формировать новый state
            return {
                ...state,
                value: state.value - 1
            }
            
        default:
            return {
                ...state
            }
    }
}