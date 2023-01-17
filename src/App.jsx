import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post'
import './global.css';


export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Fellipe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus est fugit, et voluptatum qui aspernatur dignissimos accusamus eligendi nemo consequatur cupiditate nisi quisquam debitis veniam odio ipsam voluptates mollitia."
      />
      
       <Post 
        author="Joao"
        content="Post Joao"
      />
      
    </div>
  )
}

