import React, { useEffect, useState } from 'react';
import Post from '../components/post';
import api from '../api';

const PostScreen = () => {
    const [posts,setPosts] = useState([])
    
    const getPosts = async () => {
        const  {data} = await api.get('/posts')
        setPosts(data)
    }
    
    useEffect(()=>{
        getPosts()
    },[])

  return (
    <div style={styles.container}>
        {
            posts.map((item)=>(
                <Post
                    title={item.title}
                    content={item.text}
                    author="John Doe"
                />)
            )
        }
      
    </div>
  );
};

const styles ={
  container: {
    margin:'0 200px',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default PostScreen;
