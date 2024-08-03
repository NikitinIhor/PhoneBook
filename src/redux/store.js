import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import contactsReducer from "../redux/contacts/slice"
import filterReducer from "../redux/filters/slice"
import authReducer from "../redux/auth/slice"
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token"],
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)


