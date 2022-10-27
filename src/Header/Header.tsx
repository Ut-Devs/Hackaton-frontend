import React from 'react'
import './styles.css'
import Logo from '../assets/Logo.svg'

export const Header = () => {
	return (
		<div className="header">
			<div className="brand">
				<img src={Logo} className="logo" alt="" />
                <h1 className="title">GRINDLEARN</h1>
			</div>
		</div>
	)
}

export default Header
