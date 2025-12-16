// src/Dashboard.tsx
import React from 'react';
import { Box, Paper, Typography, Container, Chip } from '@mui/material';

import Grid from '@mui/material/Grid';
import SecurityIcon from '@mui/icons-material/Security';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#f4f6f8', py: 4 }}>
      <Container maxWidth="xl">
        
        {/* 1. 頁面標題區 */}
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <SecurityIcon sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
          <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary">
            資安監控儀表板 (Cybersecurity Dashboard)
          </Typography>
        </Box>

        {/* 2. 核心佈局 Grid Container */}
        {/* MUI v6: Grid 本身就是 container，spacing 用法不變 */}
        <Grid container spacing={3}>
          
          {/* --- A. 頂部數據總覽卡片 --- */}
          {/* MUI v6 修正: 移除 item，並將 xs, sm, md 改為 size={{ ... }} */}
          
          {/* 卡片 1: Critical Threats */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 140, borderLeft: '6px solid #d32f2f' }}>
              <Typography color="textSecondary" variant="subtitle1">Critical Threats</Typography>
              <Typography variant="h3" color="#d32f2f" fontWeight="bold">5</Typography>
              <Chip label="+2 from last hour" color="error" size="small" sx={{ mt: 'auto', alignSelf: 'flex-start' }} />
            </Paper>
          </Grid>

          {/* 卡片 2: Severe Alerts */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 140, borderLeft: '6px solid #f57c00' }}>
              <Typography color="textSecondary" variant="subtitle1">Severe Alerts</Typography>
              <Typography variant="h3" color="#f57c00" fontWeight="bold">12</Typography>
            </Paper>
          </Grid>

          {/* 卡片 3: Total Events */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 140, borderLeft: '6px solid #1976d2' }}>
              <Typography color="textSecondary" variant="subtitle1">Total Events</Typography>
              <Typography variant="h3" color="#1976d2" fontWeight="bold">1,024</Typography>
            </Paper>
          </Grid>

          {/* 卡片 4: System Status */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 140, borderLeft: '6px solid #2e7d32' }}>
              <Typography color="textSecondary" variant="subtitle1">System Status</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant="h5" color="#2e7d32" fontWeight="bold">Operational</Typography>
              </Box>
            </Paper>
          </Grid>


          {/* --- B. 主要圖表區 --- */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper elevation={3} sx={{ p: 3, height: 400 }}>
              <Typography variant="h6" gutterBottom>警報趨勢圖 (Alert Trends)</Typography>
              
              <Box sx={{ width: '100%', height: '85%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1 }}>
                <Typography color="textSecondary">[ Plotly Chart Placeholder ]</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* --- C. 右側列表區 --- */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={3} sx={{ p: 3, height: 400, overflow: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">最新警報</Typography>
                <WarningAmberIcon color="warning" />
              </Box>
              
              {[1, 2, 3, 4, 5].map((item) => (
                <Box key={item} sx={{ mb: 2, p: 1, borderBottom: '1px solid #eee' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" fontWeight="bold">SQL Injection Attempt</Typography>
                    <Typography variant="caption" color="textSecondary">10:3{item} AM</Typography>
                  </Box>
                  <Chip label="Critical" size="small" color="error" variant="outlined" sx={{ mt: 0.5, height: 20, fontSize: '0.7rem' }} />
                </Box>
              ))}
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};