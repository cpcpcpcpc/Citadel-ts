// 建立模板假資料

import { type SecurityAlert } from './types';


export const MOCK_ALERTS: SecurityAlert[] = [
  {
    id: 'evt-001',
    timestamp: '2025-12-16T10:30:00',
    ruleName: 'Suspicious Login Attempt',
    sourceIp: '192.168.1.5',
    destinationIp: '10.0.0.1',
    severity: 'Critical',
    status: 'New',
    description: 'Multiple failed login attempts detected from single IP.'
  },
  {
    id: 'evt-002',
    timestamp: '2025-12-16T10:35:00',
    ruleName: 'Port Scanning',
    sourceIp: '45.33.22.11',
    destinationIp: '10.0.0.2',
    severity: 'Severe',
    status: 'Investigating'
  },
];