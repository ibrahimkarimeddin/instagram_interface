import React, { useState } from 'react'
import Post from './Post'

function Posts() {
  const [post ] =useState([
    {username:'obada' , id:1 , description:'hello world and welcome to my home page' , imgpost:'/obada.png' ,like:'100',userimg:'/obada.png'},
    {username:'ahmad' , id:2 , description:'hello world and welcome to my home page' , imgpost:'ahmad.jpg' ,like:'200',userimg:'/ahmad.jpg'},
    {username:'ibrahim' , id:3 , description:'hello world and welcome to my home page' , imgpost:'ibrahim.png' ,like:'300',userimg:'/ibrahim.png'},

  ])
  return (
    <div>
        {post.map(function(post){
          return(
            <Post key={post.id} imgpost={post.imgpost} description={post.description} like={post.like} username={post.username} userimg={post.userimg}/>
          )
        })}
    </div>
  )
}

export default Posts