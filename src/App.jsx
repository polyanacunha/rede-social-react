import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from './App.module.css';

//author:{avatar_url"",name: "", role:"" }
//publishedAt:Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/diego3g.png',
      name: 'Diego Fernandez',
      role:'CTO Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
     
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> '},

       {type:'link', content: ' jane.design/doctorcare '} ,

    ],
    publishedAt: new Date('2022-09-26 20:08:09'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role:'Educator Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
     
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> '},

       {type:'link', content: '<a href=""> jane.design/doctorcare </a>'} ,

    ],
    publishedAt: new Date('2022-09-25 20:08:09'),
  },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={ styles.wrapper }>

       <Sidebar/>

        <main>
         {posts.map(post =>{

         return (<Post
         key={post.id}
         author={post.author}
         content={post.content}
         publishedAt={post.publishedAt}
         />)
          } )};
 
        </main>
      </div>
   
     </div>
  )
}

