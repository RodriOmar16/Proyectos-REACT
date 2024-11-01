import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from './temaConfig';
import Listas from './components/Listas';
import { useMediaQuery, useTheme } from '@mui/material';
import Contenedor from './components/ContenedorPrincipal';

function App() {

  const Ejemplo = styled(Button)({
    backgroundColor: 'lightblue',
    padding: '10px',
  });

  const themeMQ = useTheme();
  const isExtraSmall = useMediaQuery(themeMQ.breakpoints.only('xs'));
  const isSmall = useMediaQuery(themeMQ.breakpoints.only('sm'));
  const isMedium = useMediaQuery(themeMQ.breakpoints.only('md'));
  const isLarge = useMediaQuery(themeMQ.breakpoints.only('lg'));
  const isExtraLarge = useMediaQuery(themeMQ.breakpoints.only('xl'));
  
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Contenedor
          
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
