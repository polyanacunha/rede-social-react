import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){


  function handleDeleteComment(){
       onDeleteComment(content);
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
              <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
              </button>
                </footer>
            </div>
        </div>
    )
}