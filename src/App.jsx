
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { Post } from './Post'
import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Fellipe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus est fugit, et voluptatum qui aspernatur dignissimos accusamus eligendi nemo consequatur cupiditate nisi quisquam debitis veniam odio ipsam voluptates mollitia."
          />
          
          <Post 
            author="Joao"
            content="Post Joao"
          />
        </main>
      </div>
    </div>
  )
}

