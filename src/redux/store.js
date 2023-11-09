import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import forgotPasswordReducer from "./features/forgotPassword/forgotPasswordSlice";
import resetPasswordReducer from "./features/forgotPassword/resetPasswordSlice";
import kontrakanByIdReducer from "./features/kontrakan/kontrakanByIdSlice";
import kontrakanReducer from "./features/kontrakan/kontrakanSlice";
import kostByIdReducer from "./features/kost/kostByIdSlice";
import kostReducer from "./features/kost/kostSlice";
import roomByIdSlice from "./features/kost/roomByIdSlice";
import nearbyByIdReducer from "./features/nearby/nearbyByIdSlice";
import nearbyReducer from "./features/nearby/nearbySlice";
import userDetailsReducer from "./features/user/userDetailsSlice";
import userRegistrationReducer from "./features/userRegistration/userRegistrationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    kosts: kostReducer,
    nearby: nearbyReducer,
    nearbyById: nearbyByIdReducer,
    kontrakan: kontrakanReducer,
    kontrakanById: kontrakanByIdReducer,
    kostById: kostByIdReducer,
    roomById: roomByIdSlice,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    registration: userRegistrationReducer,
    resetPassword: resetPasswordReducer,
  },
});
export default store;
