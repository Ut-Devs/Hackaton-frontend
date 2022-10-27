import styles from './styles.module.scss'
import books from '../../assets/books.webp'


const index = () => {
	return (
		<div className={styles.content}>
			<aside className={styles.textContent}>
				<h2 className={styles.title}>
          Aprenda a programar ainda hoje!
				</h2>
				<p className={styles.subtitle}>
          Com o GrindLearn, você pode aprender os conceitos fundamentais da
          programação aliados a muita prática, temos aulas do nível básico ao
          avançado.
				</p>
			</aside>
			<aside className={styles.imageContainer}>
				<img className={styles.picture} src={books} alt="" />
			</aside>
		</div>
	)
}

export default index