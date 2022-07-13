import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { reducer_medicines } from "./medicine.reducer";

export const rootreducs = combineReducers ({
    counter : counterReducer,
    medicine : reducer_medicines
})   