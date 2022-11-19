import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import palette from './palette';
import typography from './typography';

export const darkTheme = createTheme({
    palette: palette.dark,
    typography: typography,
    shadows: shadows.dark,
    shape: { borderRadius: 8 },


});
