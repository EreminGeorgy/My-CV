import React from 'react'

import DICTIONARY from '../../dictionary'

import styles from './Header.module.scss'

export const Header = ({lang}) => {
	return (
		<div className={styles.Header}>
			<h1 className={styles.Header__Name}>{DICTIONARY[`${lang}`].name}</h1>
			<h2 className={styles.Header__JobTitle}>{DICTIONARY[`${lang}`].job_title}</h2>
		</div>
	)
}