import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import ReactPlayer from 'react-player'
import api from '../../services/baseUrl'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {ExpandLess, ExpandMore, StarBorder, RadioButtonUncheckedOutlined, OndemandVideo } from '@mui/icons-material'


const ClassVIdeo = () => {
	const [open, setOpen] = useState<{open: boolean, index: number}>({open: true, index: 0})
	const [course, setCourse] = useState<any>()
	const [videoUrl, setVideoUrl] = useState<string>()
	const [videoTitle, setVideoTitle] = useState<string>()

	const getClasses = async () => {
		const response = await api.get('/classes')
		setVideoUrl(response.data.modules[0].classes[0].link)
		setVideoTitle(response.data.modules[0].classes[0].name)
		setCourse(response.data)
	}

	const handleClick = (index: number) => {
		if(open.index == index && open.open == true) {
			setOpen({open: false, index})
		}
		else{
			setOpen({open: true, index: index})
		}
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
			<div className={styles.modules__list}>
				{
					course?.modules.map((moduleClass: any, index: number) => (
						<List key={index}>
							<ListItemButton onClick={() => {
								handleClick(index)
							}}>
								<ListItemIcon>
									<RadioButtonUncheckedOutlined />
								</ListItemIcon>
								<ListItemText primary={moduleClass.module_name} />
								{open.open && open.index == index ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={open.open && open.index == index} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									{
										moduleClass.classes.map((classItem: any, index: number) => (
											<ListItemButton key={index} sx={{ pl: 4 }} onClick={() => {
												setVideoUrl(classItem.link)
												setVideoTitle(classItem.name)
											}}>
												<ListItemIcon>
													<OndemandVideo />
												</ListItemIcon>
												<ListItemText primary={classItem.name} />
											</ListItemButton>
										))
									}
								</List>
							</Collapse>
						</List>
					))
				}
			</div>
		</div>
	)
}

export default ClassVIdeo