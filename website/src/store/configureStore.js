import { createStore } from 'redux';
import toggleLevel from './reducers/levelReducer'


export const store =  createStore(toggleLevel)