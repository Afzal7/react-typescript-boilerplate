import { Box, Container, CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from '../../../styles/theme';
import Footer from '../footer';
import Header from '../header';

interface Props {
	children: React.ReactElement;
}

export function Layout({ children }: Props): React.ReactElement {
	console.log('Current theme: ', theme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth='xl'>
				<Box
					sx={{
						bgcolor: theme.palette.background.paper,
						minHeight: '80vh',
						mt: 2,
					}}
				>
					{children}
				</Box>
			</Container>
			<Footer />
		</ThemeProvider>
	);
}
