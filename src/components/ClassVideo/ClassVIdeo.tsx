import React from 'react'
import styles from './styles.module.scss'
import ReactPlayer from 'react-player'

export const ClassVIdeo = () => {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>Aprenda ReactJS</h2>
			<div className={styles.vid}>
				<div className={styles.player1}>
					<ReactPlayer url="https://www.youtube.com/watch?v=cLRztK1zE6s" />
				</div>
				<div className={styles.description}>
          Com o nosso curso de ReactJS você irá aprender:
					<div className={styles.list}>
						<ul>
							<li>
                PropTypes
								<ul className={styles.subitem}>
									<li>Hooks</li>
								</ul>
							</li>

							<li>
                Typescript
								<ul className={styles.subitem}>
									<li>Jest</li>
								</ul>
							</li>

							<li>
                ReactDOM
								<ul className={styles.subitem}>
									<li>Next</li>
								</ul>
							</li>

							<li>
                Next
								<ul className={styles.subitem}>
									<li>Nuxt</li>
								</ul>
							</li>

							<li>
                ChartJS
								<ul className={styles.subitem}>
									<li>Gráficos e Tabelas</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
