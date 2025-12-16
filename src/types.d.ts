
// 1. 定義風險等級 (Severity Level)
export type SeverityLevel = 'Critical' | 'Severe' | 'High' | 'Medium' | 'Low';

// 2. 定義警報狀態
export type AlertStatus = 'New' | 'Investigating' | 'Resolved';

// 3. 定義核心警報物件介面 (Security Alert Interface)
export interface SecurityAlert {
  id: string;             // 唯一識別碼 (給 React list key 使用)
  timestamp: string;      // 發生時間 (給 Plotly 畫時間軸使用)
  ruleName: string;       // 觸發規則名稱 (例如：DDoS Attack, SQL Injection)
  sourceIp: string;       // 來源 IP (增加真實感)
  destinationIp: string;  // 目標 IP
  severity: SeverityLevel; // 引用上面定義的風險等級
  status: AlertStatus;    // 處理狀態 (讓您可以做篩選功能)
  description?: string;   // 可選欄位 (?)，警報的詳細描述
}