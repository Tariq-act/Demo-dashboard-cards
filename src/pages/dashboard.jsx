import { Box, Paper, Typography } from "@mui/material";

import MetricCard from "../components/metric-card";
import Recommendations from "../components/recommendations";

import { whoopData, recommendations } from "../data/mockData";

export default function Dashboard() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 4,
          padding: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          WHOOP Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: 2,
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <MetricCard title="Recovery" value={whoopData.recovery} unit="%" />
          <MetricCard title="Sleep" value={whoopData.sleep} unit="hrs" />
          <MetricCard title="Strain" value={whoopData.strain} unit="" />
        </Box>

        <Recommendations data={recommendations} />
      </Paper>
    </Box>
  );
}
