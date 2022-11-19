import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import palette from './palette';
import typography from './typography';

export const lightTheme = createTheme({
    palette: palette.light,
    typography: typography,
    shadows: shadows.light,
    shape: { borderRadius: 8 },

});
