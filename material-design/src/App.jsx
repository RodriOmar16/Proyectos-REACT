import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaConfig';
import Navbar from './components/Navbar';

function App() {

  const Ejemplo = styled(Button)({
    backgroundColor: 'lightblue',
    padding: '10px',
  });
  
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
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

        <Ejemplo>Hola</Ejemplo>
      </ThemeProvider>
    </div>
  );
}

export default App;
