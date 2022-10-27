import { ReactNode } from 'react'
import styles from './styles.module.scss'



interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children: ReactNode
  color?: 'primary' | 'secondary' | 'neutral'
  rounded?: boolean
}

const verify = (color: 'primary' | 'secondary' | 'neutral' | undefined) => {
	switch (color) {
	case 'primary':
		return '#0FFF95'
	case 'secondary':
		return '#42858C'
	case 'neutral':
		return '#3b3b3b'
	default:
		return '#0FFF95'
	}
}
const index = ({onClick, children, color, rounded, ...props}: IButtonProps) => {

	return (
		<button onClick={onClick} className={styles.button} {...props} style={{
			background: verify(color),
			borderRadius: rounded ? '50px' : '5px'
      
		}}>{children}</button>
	)
}

export default index