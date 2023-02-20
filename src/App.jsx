import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css'


export function App() {
    return (
        <>
        <Header />
       
       <div className={styles.wrapper}>
       <Sidebar />
        <main>
        <Post
            author="Karine Rocha"
            content="Lorem ipsum dolor, 
                    sit amet consectetur adipisicing elit. 
                    Sapiente nihil fugiat culpa, aspernatur 
                    maxime quae nobis odit commodi dolor
                     deleniti officiis animi consequuntur 
                     molestias distinctio sit inventore 
                     laudantium accusamus sed"
        />
        </main>
      
       </div>
        </>
    )
}
