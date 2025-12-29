
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SecurityAlert } from '../types';
import { MOCK_ALERTS } from '../mockData';

// 定義這個 Slice 的狀態介面
interface DashboardState {
  alerts: SecurityAlert[];
  lastUpdated: string;
}

// 初始狀態
const initialState: DashboardState = {
  alerts: MOCK_ALERTS,
  lastUpdated: new Date().toISOString(),
};


const MAX_ALERTS = 100; // 設定上限值

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // 定義一個 Action：新增警報 (未來模擬實時數據用)
    addAlert: (state, action: PayloadAction<SecurityAlert>) => {
      state.alerts.unshift(action.payload); // 加到陣列最前面

      // 檢查長度，如果超過則切掉後面的
      if (state.alerts.length > MAX_ALERTS) {
        state.alerts.pop();
      }

      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const { addAlert } = dashboardSlice.actions;
export default dashboardSlice.reducer;