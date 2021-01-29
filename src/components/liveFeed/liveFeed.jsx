import NavBar from '../navbar/navbar';
import liveFeedSvg from './liveFeed.svg';
import Post from './post';
import './liveFeed.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';

function LiveFeed(){
    const history = useHistory();
   
    const[posts, setPosts] = useState([]);
    const[health, setHealth]= useState(0);
    const[coins, setCoins]=useState();
    useEffect(()=>{
        axios.get(`https://edufy-space-api.herokuapp.com/posts/`, {
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token') 
            }
        })
        .then(res=>{
            setPosts(res.data);
        })
        .catch(err=>{
            if(err.response.status == 401 || err.response.status == 403){
                history.push('/');
            }
        })


    },[])
 
    useEffect(()=>{
        axios.get(`https://edufy-space-api.herokuapp.com/users/${localStorage.getItem('user_id')}`, {
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res.data);
            setHealth(res.data.health);
            setCoins(res.data.gold);
            
        })
        
    }, [])

    
    return(
        
        <div className="live-feed">
        <NavBar hp={health} coins={coins}/>
        <div><h1 className="feed-title">Updates From the World</h1></div>
        <img src={liveFeedSvg} className="post-image"></img>
        {posts.map(post=>{
           return <Post avatar={post.avatar} name={post.name} location={post.location}  description={post.description}/>
        })}
       
        </div>
    )
}

export default LiveFeed;