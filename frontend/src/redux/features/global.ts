import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState, Level } from "./global.types";

const initialState: GlobalState = {
  nickname: "",
  level: Level.EASY,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    globalNickname: (state: GlobalState, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    globalLevel: (state: GlobalState, action: PayloadAction<Level>) => {
      state.nickname = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { globalNickname, globalLevel } = globalSlice.actions;

export default globalSlice.reducer;
