import styles from "./Tweet.module.css";

export default function Tweet() {
	return <div className={styles['tweet-container']}>
		<img
			src="https://github.com/otthonleao.png"
			alt={"Otthon Leão"}
			className={styles['avatar']}
		/>

		<div className={styles['user']}>
			<span className={styles['user__name']}>Otthon Leão</span>
			<span className={styles['user__username']}>@otthonleao</span>
			<span className={styles['date']}> - há 5 dias</span>
		</div>

		<div className={styles['tweet-text']}>
			Este é um tweet estático vindo de Tweet.jsx
		</div>
	</div>
}