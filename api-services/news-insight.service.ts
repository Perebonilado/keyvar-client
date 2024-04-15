import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";
import {
  GetAllInsightsQueryModel,
  InsightModel,
  InsightQueryModel,
  InsightSummaryModelResponse,
  NewsLetterSubscriptionPayloadModel,
} from "@/models/Insight";
import { InsightDto, InsightSummaryDto } from "@/dto/insight.dto";
import * as moment from "moment";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/news-insight/`,
  timeout: secondsToMilliSeconds(30),
});

export const newsInsightService = createApi({
  reducerPath: "news-insight",
  baseQuery,
  tagTypes: ["all-insights", "single-insight"],
  endpoints: (build) => ({
    subscribe: build.mutation<"", NewsLetterSubscriptionPayloadModel>({
      query: (body) => ({
        url: "/subscribe",
        method: "POST",
        body,
      }),
    }),
    getAllInsights: build.query<
      InsightSummaryModelResponse,
      GetAllInsightsQueryModel
    >({
      query: ({ category = "", page, pageSize }) => ({
        url: `/posts`,
        params: {
          category,
          page,
          pageSize,
        },
      }),
      providesTags: ["all-insights"],
      transformResponse: (response: InsightSummaryDto) => {
        if (!response) return <InsightSummaryModelResponse>{};
        else {
          return <InsightSummaryModelResponse>{
            data: response.data.map((res) => {
              return {
                author: `${res.author.lastName ?? ""} ${
                  res.author.firstName ?? ""
                }`,
                body: res.summary,
                date: moment.utc(res.date).format('MMMM DD, YYYY'),
                id: res.id,
                imageUrl: res.image,
                title: res.title,
              };
            }),
            totalCount: response.meta.totalCount,
          };
        }
      },
    }),
    getInsight: build.query<InsightModel, InsightQueryModel>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
      }),
      providesTags: ["single-insight"],
      transformResponse: (res: InsightDto) => {
        if (!res) return <InsightModel>{};
        else return res;
      },
    }),
  }),
});

export const {
  useSubscribeMutation,
  useGetAllInsightsQuery,
  useGetInsightQuery,
} = newsInsightService;
