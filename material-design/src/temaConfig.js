import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    primary:{
      light:'#5fa463',
      main: '#388e3c',
      dark: "6fbf73"
    },
    secondary:{
      main:  '#00e676'
    }
  }
});

export default theme;