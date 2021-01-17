import NavBar from '../navbar/navbar';
import liveFeedSvg from './liveFeed.svg';
import Post from './post';
import './liveFeed.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LiveFeed(){
    const history = useHistory();
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`https://edufy-api.herokuapp.com/posts/`, {
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res.data);
            setPosts(res.data);
        })
        .catch(err=>{
            if(err.response.status == 401 || err.response.status == 403){
                history.push('/');
            }
        })


    },[])

    return(
        
        <div className="live-feed">
        <NavBar/>
        <div><h1 className="feed-title">Updates From the World</h1></div>
        <img src={liveFeedSvg} className="post-image"></img>
        {posts.map(post=>{
           return <Post avatar={post.avatar} name={post.name} location={post.location}  description={post.description}/>
        })}
       
        </div>
    )
}

export default LiveFeed;