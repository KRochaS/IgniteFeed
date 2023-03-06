import './global.css';

import { useEffect, useState } from 'react';

import styles from './App.module.css';
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';
import api from './services/api';


export function App() {
    const [posts, setPosts] = useState<PostType[]>([]);
    
    useEffect(() => {
        async function getPosts() {
            const response = await api.get('/posts');
            setPosts(response.data);
        }
    
        getPosts();
    }, []);

    
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {
                        posts.map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    post={post}
                                />
                            )
                        })
                    }
                </main>

            </div>
        </>
    )
}
