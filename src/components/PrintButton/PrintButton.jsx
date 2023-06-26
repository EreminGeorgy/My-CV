import React from 'react'

import printer from '../../assets/printer.png'

import DICTIONARY from '../../dictionary'

import styles from './PrintButton.module.scss'

export const PrintButton = ({lang}) => {
	const print = () => {
		window.print()
		return false
	}

	return (
		<button onClick={print} className={styles.PrintButton}>
			<img alt='print' width="20px" height="20px" className={styles.Button__Icon} src={printer}/>
			<span className={styles.PrintButton__Text}>{DICTIONARY[`${lang}`].print}</span>
		</button>
	)
}
