import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    primary:{
      light:'#7c88cc',
      main: '#5c6bc0',
      dark: "#404a86"
    },
    secondary:{
      main:  '#f50057',
      light: '#f73378',
      dark:  "#ab003c"
    }
  }
});

export default theme;