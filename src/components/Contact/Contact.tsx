import React from 'react'
import styles from './styles.module.scss'

const Contact = () => {
	return (
		<div>
			<h1 className={styles.title}>Contate-nos</h1>
			<ul className={styles.item}>
				<li>E-mail: utdevs.contact@gmail.com</li>
			</ul>

			<h2>Quem somos?</h2>
			<ul className={styles.item}>
				<li>Somos uma equipe de Desenvolvedores chamada UTDEVS.</li>
				<li>Nossa Equipe é formada por 4 alunos do Bacharelado em Ciência da
        Computação na UTFPR - Ponta Grossa.</li>
			</ul>
			<h2>Integrantes</h2>
			<ul className={styles.item}>
				<li>Jonathan Santos</li>
				<li>Rafael Perina</li>
				<li>Elquias Monteiro</li>
				<li>Felipe Merenda</li>
			</ul>
			
		</div>
	)
}

export default Contact
