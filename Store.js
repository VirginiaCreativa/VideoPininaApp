import { createStore } from 'redux';
import reducer from './src/reducers/definiciones'

const store = createStore(reducer, {})

export default store;