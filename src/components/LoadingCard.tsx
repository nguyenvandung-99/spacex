import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function LoadingCard() {
  return (
    <Card
      variant='outlined'
      sx={{ mb: 2, borderRadius: 4, width: 500, p: 2, display: 'flex', borderColor: 'grey' }}
    >
      <Typography variant='h5'>
        Loading...
      </Typography>
    </Card>
  )
}