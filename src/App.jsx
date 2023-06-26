import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'

import styles from './App.module.scss'
import { PrintButton } from './components/PrintButton/PrintButton'

const App = () => {

  return (
    <div className={styles.App}>
      <PrintButton lang="en"/>
      <Header lang="en"/>
      <Sidebar lang="en"/>
      <Content lang="en"/>
    </div>
  );
}

export default App
