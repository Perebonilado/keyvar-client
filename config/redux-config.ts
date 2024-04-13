import { businessEnquiryService } from "@/api-services/business-enquiry.service";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const reduxStore = configureStore({
  reducer: {
    [businessEnquiryService.reducerPath]: businessEnquiryService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([businessEnquiryService.middleware]);
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
