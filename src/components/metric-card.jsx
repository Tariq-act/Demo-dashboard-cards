import { Paper, Typography } from "@mui/material";

export default function MetricCard({ title, value, unit }) {
  return (
    <Paper
      elevation={4}
      sx={{
        padding: 3,
        minWidth: 150,
        textAlign: "center",
        borderRadius: 3,
        boxShadow: "0 6px 20px rgba(0,0,0,0.07)",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {value}{" "}
        <Typography variant="body2" component="span">
          {unit}
        </Typography>
      </Typography>
    </Paper>
  );
}
