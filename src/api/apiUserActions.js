import { createApi } from "@reduxjs/toolkit/query/react";
import { putDislikeTrack, putLikeTrack } from "../store/actions";
import baseQueryWithReauth from "./baseQueruWithReauth";

const TRACKS_MARKER = "Tracks";

export const userActions = createApi({
  reducerPath: "userActions",
  baseQuery: baseQueryWithReauth,

  
})