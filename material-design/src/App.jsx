import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'

function App() {
  return (
    <div >
      <Button variant='contained' endIcon={<DeleteIcon />}>Text</Button>
      <Button variant="contained" color="error">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Divider></Divider>
      <Typography variant="caption" color="info" align='center'>
        Esto es un Typography
      </Typography>
    </div>
  );
}

export default App;
