import React from 'react'

import DICTIONARY from '../../dictionary'

import styles from './Content.module.scss'

export const Content = ({lang}) => {
	return (
		<div className={styles.Content}>
			<section>
				<h3 className={styles.Content__Title}>{DICTIONARY[`${lang}`].expirience_title}</h3>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].november} 2022 - {DICTIONARY[`${lang}`].present}: <b>{DICTIONARY[`${lang}`].revolut}</b>
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].revolut_expirience}
						</p>
					</div>
				</div>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].november} 2021 - {DICTIONARY[`${lang}`].november} 2022: <b>{DICTIONARY[`${lang}`].spimex}</b>
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].spimex_expirience}
						</p>
					</div>
				</div>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].august} 2020 - {DICTIONARY[`${lang}`].november} 2021: <b>{DICTIONARY[`${lang}`].atlas}</b>
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].atlas_expirience}
						</p>
					</div>
				</div>
				
				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].december} 2019 - {DICTIONARY[`${lang}`].august} 2020: <b>{DICTIONARY[`${lang}`].lipgart}</b>
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].lipgart_expirience}
						</p>
					</div>
				</div>
				
				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].december} 2018 - {DICTIONARY[`${lang}`].december} 2019: <b>{DICTIONARY[`${lang}`].mk}</b>
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].mk_expirience}
						</p>
					</div>
				</div>
				
			</section>

			<section className={styles.Content__EducationWrapper}>
				<h1 className={styles.Content__Title}>{DICTIONARY[`${lang}`].education_title}</h1>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>htmlacademy.ru, online course, 2020</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>React & redux</p>
					</div>
				</div>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>htmlacademy.ru, online course, 2018</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>Advanced HTML and CSS, DOM & interfces</p>
					</div>
				</div>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].september} 2013 - {DICTIONARY[`${lang}`].june} 2016 {DICTIONARY[`${lang}`].MSTU}
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].phd}
						</p>
					</div>
				</div>

				<div className={styles.Content__ExpirienceWrapper}>
					<div className={styles.Content__Period}>
						{DICTIONARY[`${lang}`].september} 2007 - {DICTIONARY[`${lang}`].june} 2013 {DICTIONARY[`${lang}`].MSTU}
					</div>
					<div className={styles.Content__DescriptionWtapper}>
						<p className={styles.Content__Description}>
							{DICTIONARY[`${lang}`].master_degree}
						</p>
					</div>
				</div>


			</section>
		</div>
	)
}

