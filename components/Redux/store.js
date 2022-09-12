import {configureStore} from '@reduxjs/toolkit'
import cartslice from './reducer'
const store = configureStore({ reducer: {
    cart : cartslice,
}})
export default store