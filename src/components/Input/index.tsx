import { InputHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  type: string
  icon?: ReactNode
}

const index = ({ icon, name, type, ...props }: IInputProps) => {
	return (
		<div className={styles.input_container}>
			{icon}
			<input type={type} name={name} {...props} autoComplete="off" />
		</div>
	)
}

export default index
