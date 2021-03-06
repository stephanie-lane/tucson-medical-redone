import React from 'react'
import {createUseStyles} from 'react-jss'
import {Link} from 'react-router-dom'
import logo from '../logo.gif'

interface IProps {
	handleMenuIsOpenToggle: () => void
}

const useStyles = createUseStyles({
	container: {
		display: 'grid',
		gridTemplateColumns: '1fr 8fr 1fr',
		gridGap: '40px',
	},
	logo1: {
		padding: '10px 40px 20px 40px',
	},
	logo2: {
		height: '35px',
		width: '35px',
		padding: '30px 0 20px 20px',
		display: 'none'
	},
	bodyContainer: {},
	body: {
		padding: '10px 40px',
	},
	title: {
		fontSize: '24px',
		fontWeight: '800',
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '320px',
	},
	subtitle1: {
		fontSize: '18px',
		fontWeight: '600',
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '320px',
	},
	subtitle2: {
		fontSize: '14px',
		fontWeight: '600',
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '320px',
	},
	border: {
		border: '1px solid #b87333',
		margin: '10px 0',
		maxWidth: '320px',
	},
	subtitle3: {
		fontSize: '12px',
		fontStyle: 'italic',
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '320px',
	},
	menu: {
		backgroundColor: '#b87333',
		fontSize: '12px',
		padding: '5px 100px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	hamburger: {
		display: 'none',
	},
	hamburgerLine: {},
	link: {
		textDecoration: 'none',
		color: 'white',
		cursor: 'pointer',
		whiteSpace: 'nowrap',
	},
	'@media (min-width: 570px) and (max-width: 750px)': {
		container: {
			display: 'grid',
			gridTemplateColumns: '1fr 8fr 1fr',
			gridGap: '0',
		},
		body: {
			margin: 'auto',
		},
		logo1: {
			width: '100px',
			height: '100px',
			padding: '10px',
		},
		logo2: {
			display: 'none'
		},
		menu: {
			display: 'none',
		},
		hamburger: {
			display: 'block',
			border: 'none',
			backgroundColor: 'white',
			height: '70px',
		},
		hamburgerLine: {
			width: '20px',
			height: '3px',
			margin: '5px',
			backgroundColor: '#b87333',
			color: '#b87333',
			borderRadius: '15px',
		},
	},
	'@media (max-width: 570px)': {
		container: {
			padding: '10px',
			display: 'grid',
			gridTemplateColumns: '11fr 1fr',
			gridGap: '0',
		},
		bodyContainer: {
			display: 'grid',
			gridTemplateColumns: '1fr 100fr',
		},
		body: {
			maxWidth: '100%',
			padding: '10px 20px'
		},
		logo1: {
			display: 'none'
		},
		logo2: {
			display: 'block'
		},
		menu: {
			display: 'none',
		},
		hamburger: {
			display: 'block',
			border: 'none',
			backgroundColor: 'white',
			height: '70px',
			width: '30px',
			marginRight: '20px'
		},
		hamburgerLine: {
			width: '20px',
			height: '3px',
			margin: '5px',
			backgroundColor: '#b87333',
			borderRadius: '15px',
		},
	},
})

export const Header = ({handleMenuIsOpenToggle}: IProps) => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.container}>
				<img src={logo} className={classes.logo1} alt='logo' />
				<div className={classes.bodyContainer}>
					<img src={logo} className={classes.logo2} alt='logo' />
					<div className={classes.body}>
						<div className={classes.title}>Golden West Weight Loss</div>
						<div className={classes.subtitle1}>Tucson, Arizona</div>
						<div className={classes.subtitle2}>(520) 792-1966</div>
						<div className={classes.border}></div>
						<div className={classes.subtitle3}>
							Changing the Shape of Tucson since 1984
						</div>
					</div>
				</div>
				<button className={classes.hamburger} onClick={handleMenuIsOpenToggle}>
					<div className={classes.hamburgerLine}></div>
					<div className={classes.hamburgerLine}></div>
					<div className={classes.hamburgerLine}></div>
				</button>
			</div>
			<div className={classes.menu}>
				<Link className={classes.link} to='/'>
					Home
				</Link>
				<Link className={classes.link} to='request-appointment'>
					Appointments
				</Link>
				<Link className={classes.link} to='/news'>
					News
				</Link>
				<Link className={classes.link} to='/tools'>
					Tools
				</Link>
				<Link className={classes.link} to='/about-us'>
					About Us
				</Link>
				<Link className={classes.link} to='/help'>
					Help/FAQ
				</Link>
				<Link className={classes.link} to='/about-this-project'>
					About This Project
				</Link>
			</div>
		</>
	)
}
