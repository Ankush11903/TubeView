import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const YoutubeApi = createApi({
  reducerPath: "YoutubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://yt-api.p.rapidapi.com/",
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', `9ebcb246e2msh74898c09d833210p128b76jsnf7b9d8e09c77`);
        
        return headers;
      },
  }),
  endpoints: (builder) => ({
    getTrendingVideos: builder.query({
        query: () => 'trending?geo=IN&count=50'
        ,
    }),
    getSearchVideos: builder.query({
        query: (selector) => 'search?query='+selector+'&geo=IN&count=50'
        ,
    }),
    getComments: builder.query({
        query: (id) => 'https://yt-api.p.rapidapi.com/comments?id='+id+'&count=50'
        ,
    }),
  }),
});
export const { useGetTrendingVideosQuery,useGetSearchVideosQuery,useGetCommentsQuery } = YoutubeApi;
