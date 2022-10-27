import React from 'react'
import './styles.css'
import Logo from '../assets/Logo.svg'

export const Header = () => {
	return (
		<div className="header">
			<div className="brand">
				<img className="logo" src={Logo} alt="" />
				<h1 className="title">GRINDLEARN</h1>
			</div>
			<div className="botao">
				<button>ENTRAR</button>
			</div>
			{/* <div className="about"></div> */}
		</div>
	)
}

export default Header
