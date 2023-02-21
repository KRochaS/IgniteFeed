import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post() {
    return (
        <h1>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar hasBorder src="https://github.com/diego3g.png"/>
                        <div className={styles.authorInfo}>
                            <strong> Karine Rocha </strong>
                            <span> Front-end Developer</span>
                        </div>
                    </div>

                    <time title="20 de Fevereiro ás 15:30" dateTime="2023-02-20 15:28:00">
                        Publicado há 1h
                    </time>
                </header>

                <div className={styles.content}>
                    <p> Fala galeraa 👋</p>

                    <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

                    <p>👉 <a href="">jane.design/doctorcare </a></p>

                    <p>
                        <a href="#">#novoprojeto </a>
                        <a href="#"> #nlw </a>
                        <a href="#"> #rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong> Deixe seu feedback</strong>
                    <textarea  
                        placeholder='Deixe um comentário'
                    />

                    <footer>
                        <button type='submit'> Publicar </button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </article>
        </h1>
    )
}