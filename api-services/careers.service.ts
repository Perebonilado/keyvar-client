import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "../utils";
import { JobRoleModel } from "@/models/career";
import { JobRoleDto } from "@/dto/career.dto";

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/job/`,
  timeout: secondsToMilliSeconds(30),
});

export const careerService = createApi({
  reducerPath: "career",
  baseQuery,
  tagTypes: ["job-roles"],
  endpoints: (build) => ({
    applyForJob: build.mutation<"", FormData>({
      query: (body) => ({
        url: "apply",
        method: "POST",
        body,
      }),
    }),
    getActiveJobRoles: build.query<JobRoleModel[], "">({
      query: () => ({
        url: "roles",
      }),
      providesTags: ["job-roles"],
      transformResponse: (res: JobRoleDto[]) => {
        if (!res) return <JobRoleModel[]>[];
        else return res;
      },
    }),
  }),
});

export const { useApplyForJobMutation, useGetActiveJobRolesQuery } =
  careerService;
