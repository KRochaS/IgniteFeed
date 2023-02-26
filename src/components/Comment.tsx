import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export interface CommentType {
    id: number;
    comment: string;
}

interface CommentProps {
    content: CommentType;
    onDeleteComment: (idComment: number) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content.id);
    }


    function handleLikeComment() {
        // setLikeCount(likeCount + 1);

        // resolvendo problema de closures

        // const newLikeCount = likeCount + 1
        // setLikeCount(newLikeCount);


        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="profile image" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Diego Fernandes </strong>
                            <time title="20 de Fevereiro ás 15:30" dateTime="2023-02-20 15:28:00">
                                Cerca de 2h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content.comment}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}