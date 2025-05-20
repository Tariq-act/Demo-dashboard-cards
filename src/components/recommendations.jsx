import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

export default function Recommendations({ data }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 3,
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        backgroundColor: "#fefefe",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Recommendations
      </Typography>
      <List>
        {data.map((rec, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText primary={`• ${rec}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
