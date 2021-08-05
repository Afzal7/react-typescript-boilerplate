import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			light: '#868cb6',
			main: '#4a57a3',
			dark: '#374085',
			contrastText: '#fff',
		},
		error: {
			light: '#f4b5b9',
			main: '#e95961',
			dark: '#e22c37',
		},
		background: {
			default: '#edf0f0',
		},
	},
	typography: {
		fontFamily: 'Rubik, -apple-system, sans-serif',
	},
});

export default theme;
