import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#32582C'
        },
        secondary: {
            main: '#90aa55'
        },
        accent: {
            main: '#97D071'
        },
        filter: {
            main: '#789174'
        },
        text: {
            main: '#2C2C2C'
        },
        background: {
            default: '#fcfbf6'
        },
    },
    typography: {
        fontFamily: " 'Libre Baskerville', 'Pontano Sans', sans-serif",
        h1: {
            fontFamily: 'Libre Baskerville',
        },
        h2: {
            fontFamily: 'Libre BaskerVille',
            fontSize: '2.5rem'
        },
        h3: {
            fontFamily: 'Libre Baskerville',
            fontSize: '2rem'
        },
        body1: {
            fontFamily: 'Pontano Sans'
        },
        body2: {
            fontFamily: 'Pontano Sans',
            fontSize: '1rem',
        },
        body3: {
            fontFamily: 'Libre Baskerville',
            fontSize: '1.7rem'
        },
        accessories: {
            fontFamily: 'Pontano Sans',
            fontSize: '2rem'
        },
        forms: {
            fontFamily: 'Pontano Sans'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: '"Pontano Sans", sans-serif',
                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;