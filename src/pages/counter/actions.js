import {
    COUNTER_INCREMENT, 
    COUNTER_DECREMENT
} from './constants';

export const increment = () => { // Важно чтобы type совпадал с action.type в Reducer иначе нечего не получится (action.type находится в консте COUNTER_INCREMENT)
    return {
        type: COUNTER_INCREMENT
    }
}

export const decrement = () => {
    return {
        type: COUNTER_DECREMENT
    }
}