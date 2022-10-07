import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){

  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment(){
       onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }

    return(

        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Polyana Cunha</strong>
                        <time title='11 de maio às 08:13' dateTime='2022/09/06 08:13:30'> Publicado há 1h </time>
                    </div>
                    <button onClick={handleDeleteComment} title="deletar comentario">
                    <Trash size={24}/>
                    </button>
                 </header>
               <p>{content}</p>
                </div>
                <footer>
              <button onClick={handleLikeComment}>
                <ThumbsUp/>
                Aplaudir <span>{likeCount}</span>
              </button>
                </footer>
            </div>
        </div>
    )
}