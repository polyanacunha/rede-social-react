import {Avatar} from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';

export function Post(props){
    console.log(props);
    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                  <Avatar src="https://github.com/polyanacunha.png" />
                    <div className={styles.authorInfo}>
                        <strong>Polyana Cunha</strong>
                        <span>web developer</span>
                    </div>
                </div>

                <time title='11 de maio às 08:13' dateTime='2022/09/06 08:13:30'> Publicado há 1h </time>
            </header>
            <div className={styles.content}>
           
            </div>



            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>
                <footer><button type="submit">Publicar</button></footer>

                </form>
               <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
               </div>

        </article>
    )
}