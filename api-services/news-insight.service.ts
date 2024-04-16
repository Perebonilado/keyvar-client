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
import {
  InsightCategoryDto,
  InsightDto,
  InsightSummaryDto,
} from "@/dto/insight.dto";
import * as moment from "moment";
import { LookUp } from "@/models/Lookup";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/news-insight/`,
  timeout: secondsToMilliSeconds(30),
});

export const newsInsightService = createApi({
  reducerPath: "news-insight",
  baseQuery,
  tagTypes: ["all-insights", "single-insight", "insight-categories"],
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
                date: moment.utc(res.date).format("MMMM DD, YYYY"),
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
    getInsightCategories: build.query<LookUp[], "">({
      query: () => ({
        url: "/categories",
      }),
      providesTags: ["insight-categories"],
      transformResponse: (res: InsightCategoryDto[]) => {
        if (!res) return <LookUp[]>[];
        else {
          return res.map((res) => ({ label: res.name, value: res.value }));
        }
      },
    }),
  }),
});

export const {
  useSubscribeMutation,
  useGetAllInsightsQuery,
  useGetInsightQuery,
  useGetInsightCategoriesQuery
} = newsInsightService;
