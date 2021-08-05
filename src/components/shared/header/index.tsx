import {
	AppBar,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
} from '@material-ui/core';

interface Props {
	children: React.ReactElement;
}

function HideOnScroll(props: Props): React.ReactElement {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function Header(): React.ReactElement {
	return (
		<>
			<HideOnScroll>
				<AppBar>
					<Toolbar>
						<Typography variant='h6'>React Typescript Boilerplate</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</>
	);
}
