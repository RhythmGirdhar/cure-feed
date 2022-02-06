import React, { useEffect, useState } from 'react';
import "../styles/CreatePost.css"
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import Nav from '../views/Nav'

export default function CreatePost({isAuth}) {

    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState("")

    const postsCollectionRef = collection(db, "posts")
    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postsCollectionRef, {title: title, postText: postText, author: {name: auth.currentUser.email, id: auth.currentUser.uid}})
        navigate("/review")
    }

/*useEffect (() => {
    if (!isAuth) {
        navigate("/login")
    }
})*/

  return (
      <div className="CreatePost-nav" >
          <Nav />
  <div className="CreatePost-page">
      <div className="CreatePost-container">
        <h1 className="CreatePost-header">Create A Recipe</h1>
        <div className="inputGp">
            <label className ="CreatePost-title"> Recipe Name: </label>
            <input  className="CreatePost-input" placeholder="Recipe..." onChange={(event) => {setTitle(event.target.value)}}/>
        </div>
        <div className="inputGp">
            <label className="CreatePost-post"> Recipe:</label>
            <textarea className="CreatePost-textarea" placeholder="Review..." onChange={(event) => {setPostText(event.target.value)}}/>
        </div>
        <button className="CreatePost-button" onClick={createPost}>Submit Post</button>
      </div>
  </div>
  </div>
  )}
