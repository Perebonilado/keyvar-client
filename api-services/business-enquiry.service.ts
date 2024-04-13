import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";
import { BusinessEnquiryPayloadModel } from "@/models/business-enquiry";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/enquiry/`,
  timeout: secondsToMilliSeconds(30),
});

export const businessEnquiryService = createApi({
  reducerPath: "business-enquiry",
  baseQuery,
  endpoints: (build) => ({
    makeBusinessEnquiry: build.mutation<"", BusinessEnquiryPayloadModel>({
      query: (body) => ({
        url: `make-enquiry`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useMakeBusinessEnquiryMutation } = businessEnquiryService;
