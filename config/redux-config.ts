import { businessEnquiryService } from "@/api-services/business-enquiry.service";
import { careerService } from "@/api-services/careers.service";
import { newsInsightService } from "@/api-services/news-insight.service";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const reduxStore = configureStore({
  reducer: {
    [businessEnquiryService.reducerPath]: businessEnquiryService.reducer,
    [newsInsightService.reducerPath]: newsInsightService.reducer,
    [careerService.reducerPath]: careerService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      businessEnquiryService.middleware,
      newsInsightService.middleware,
      careerService.middleware,
    ]);
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
