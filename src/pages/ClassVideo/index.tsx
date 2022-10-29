import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ReactPlayer from 'react-player'
import api from '../../services/baseUrl'

const ClassVIdeo = () => {
	const [course, setCourse] = useState<any>()
	const [videoUrl, setVideoUrl] = useState<string>()
	const [videoTitle, setVideoTitle] = useState<string>()

	const getClasses = async () => {
		const response = await api.get('/classes')
		console.log(response.data)
		setVideoUrl(response.data.modules[0].classes[0].link)
		setVideoTitle(response.data.modules[0].classes[0].name)
		setCourse(response.data)
	}

	useEffect(() => {
		getClasses()
	}, [])



	return (
		<div className={styles.classContainer}>
			<div className={styles.player__container}>
				<h2 className={styles.title}>{videoTitle}</h2>
				<ReactPlayer url={videoUrl} width="100%" height="90%" />
			</div>
			<div className={styles.description}>
				<div className={styles.modules__list}>
					<ul className={styles.modules}>
						{course?.modules.map((module: any, index: number) => (
							<li key={index} className={styles.module__container} onClick={(e) => {
								e.target.style.maxHeight == '100%' ? e.target.style.maxHeight = '20px' : e.target.style.maxHeight = '100%'
							}}>
								{module.module_name}
								<ul className={styles.subitem}>
									{module.classes.map((classs: any, index: number) => (
										<li key={index} className={styles.classPointerName}>
											<a onClick={() =>{
												setVideoUrl(classs.link)
												setVideoTitle(classs.name)
											}}>
												{classs.name}
											</a>
										</li>
									))}

								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ClassVIdeo