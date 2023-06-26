import React from 'react'

import envelope from '../../assets/envelope.png'
import telegram from '../../assets/telegram.png'
import location from '../../assets/location.png'

import DICTIONARY from '../../dictionary'

import styles from './Sidebar.module.scss'

export const Sidebar = ({lang}) => {
	return (
		<div className={styles.Sidebar}>
			<section className={styles.Content}>
				<h3 className={styles.Sidebar__Title}>{DICTIONARY[`${lang}`].profile}</h3>
				<div className={styles.Sidebar__Line}>
					<p className={styles.Sidebar__Content}>{DICTIONARY[`${lang}`].profile_description}</p>
				</div>
			</section>

			<section className={styles.Sidebar__Content}>
				<h3 className={styles.Sidebar__Title}>{DICTIONARY[`${lang}`].skills}</h3>
				<div>
					<h3 className={styles.Sidebar__SkillTitle}>{DICTIONARY[`${lang}`].core_skills}</h3>
					<ul className={styles.Sidebar__Skill}>
						<li>{DICTIONARY[`${lang}`].software}</li>
						<li>{DICTIONARY[`${lang}`].spa}</li>
						<li>{DICTIONARY[`${lang}`].frontend}</li>
					</ul>

					<h3 className={styles.Sidebar__SkillTitle}>JavaScript, ES6+</h3>
					<ul className={styles.Sidebar__Skill}>
						<li>React + Redux, Angular, VueJS</li>
						<li>NodeJS</li>
					</ul>

					<h3 className={styles.Sidebar__SkillTitle}>HTML5 / CSS3</h3>
					<ul className={styles.Sidebar__Skill}>
						<li>JSX, EJS</li>
						<li>SCSS, PostCSS, Styled Components</li>
						<li>CSSModules, BEM</li>
					</ul>

					<h3 className={styles.Sidebar__SkillTitle}>{DICTIONARY[`${lang}`].other}</h3>
					<ul className={styles.Sidebar__Skill}>
						<li>Mobile development (React native)</li>
						<li>Git, GitFlow</li>
						<li>Webpack, Gulp, Babel</li>
						<li>Karma, Jest, Enzyme, Test Cafe, Playwright</li>
						<li>SQL, PHP</li>
						<li>Docker</li>
					</ul>

					<h3 className={styles.Sidebar__SkillTitle}>{DICTIONARY[`${lang}`].soft_skills}</h3>
					<ul className={styles.Sidebar__Skill}>
						<li>{DICTIONARY[`${lang}`].agile}</li>
						<li>{DICTIONARY[`${lang}`].review}</li>
						<li>{DICTIONARY[`${lang}`].research}</li>
						<li>{DICTIONARY[`${lang}`].management}</li>
					</ul>
				</div>
			</section>

			<section className={styles.Sidebar__Content}>
				<h3 className={styles.Sidebar__Title}>{DICTIONARY[`${lang}`].contacts}</h3>
				<div className={styles.Sidebar__Line}>
					<img alt='envelope' width="20px" height="20px" className={styles.Sidebar__Icon} src={envelope}/>
					<p className={styles.Sidebar__Contact}>eremingeorgy@yandex.ru</p>
				</div>
				<div className={styles.Sidebar__Line}>
					<img alt='telegram' width="20px" height="20px" className={styles.Sidebar__Icon} src={telegram}/>
					<p className={styles.Sidebar__Contact}>@Eremingeorgy</p>
				</div>
				<div className={styles.Sidebar__Line}>
					<img alt='location' width="20px" height="20px" className={styles.Sidebar__Icon} src={location}/>
					<p className={styles.Sidebar__Contact}>Yerevan, Armenia</p>
				</div>
			</section>


			<section className={styles.Sidebar__Content}>
				<h3 className={styles.Sidebar__Title}>{DICTIONARY[`${lang}`].languages}</h3>
				<div className={styles.Sidebar__SkillWrapper}>
					<ul className={styles.Sidebar__Skill}>
						<li>{DICTIONARY[`${lang}`].english}</li>
						<li>{DICTIONARY[`${lang}`].rus}</li>
					</ul>
				</div>
			</section>
		</div>
	)
}
