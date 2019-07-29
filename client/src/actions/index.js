import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "./types";

export const incrementCounter = () => {
 return {
     type:INCREMENT_COUNTER 
 }
};

export const decrementCounter = () => {
    type:DECREMENT_COUNTER
};