import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootreducs } from './reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter']
  }
  const persistedReducer = persistReducer(persistConfig, rootreducs)
export const ConfigStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}  