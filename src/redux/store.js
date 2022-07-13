import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootreducs } from './reducer';


export const ConfigStore = () => {
    let store = createStore(rootreducs, applyMiddleware(thunk))
    return store; 
}  