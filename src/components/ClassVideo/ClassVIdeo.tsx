import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import ReactPlayer from 'react-player'
import api from '../../services/baseUrl'

export const ClassVIdeo = () => {
	const [video, setVideo] = React.useState<any>()
	const [videoUrl, setVideoUrl] = React.useState<string>()

	const getClasses = async () => {
		const response = await api.get('/classes')
		console.log(response.data)
		setVideo(response.data)
	}

	useEffect(() => {
		getClasses()
	}, [])



	return (
		<div className={styles.content}>
			<h2 className={styles.title}>Aprenda ReactJS</h2>
			<div className={styles.vid}>
				<div className={styles.player1}>
					<ReactPlayer url={videoUrl} />
				</div>
				<div className={styles.description}>
          Com o nosso curso de ReactJS você irá aprender:
					<div className={styles.list}>
						<ul>
							{video?.modules.map((module: any, index: number) => (
								<li key={index}>
									{module.module_name}
									<ul className={styles.subitem}>
										{module.classes.map((classs: any, index: number) => (
											<li key={index} className={styles.classPointerName} onClick={() =>{
												setVideoUrl(classs.link)
											}}>{classs.name}</li>
										))}

									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
