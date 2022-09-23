import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.Comment}>
            <img className={styles.imagem}src="https://github.com/polyanacunha.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Polyana Cunha</strong>
                        <time title='11 de maio às 08:13' dateTime='2022/09/06 08:13:30'> Publicado há 1h </time>
                    </div>
                    <button title="deletar comentario">
                    <Trash size={24}/>
                    </button>
                 </header>
               <p>Muito bom marina, parabéns!!</p>
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