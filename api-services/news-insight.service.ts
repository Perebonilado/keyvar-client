import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";
import { NewsLetterSubscriptionPayloadModel } from "@/models/Insight";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/news-insight/`,
  timeout: secondsToMilliSeconds(30),
});

export const newsInsightService = createApi({
  reducerPath: "news-insight",
  baseQuery,
  endpoints: (build) => ({
    subscribe: build.mutation<"", NewsLetterSubscriptionPayloadModel>({
      query: (body) => ({
        url: "/subscribe",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubscribeMutation } = newsInsightService;
