import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

       <Sidebar/>

        <main>
        <Post 
        author="Polyana Cunhaoi" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium nihil iusto ipsam tempora tenetur quia quaerat quisquam, illum facere, hic minus, temporibus obcaecati? Expedita neque possimus fugit vero autem."
     />

    <Post 
        author = "lívia antony"
        content = "eh mt chata"
      />
        </main>
      </div>
   
     </div>
  )
}

