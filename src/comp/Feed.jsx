import React,{ useState, useEffect } from 'react'
import '../ess/css/Feed.css'
import PostMaker from './PostMaker'
import StoryReel from './Feed/StoryReel'
import Post from './Feed/Post'
import db from '../firebase'

function Feed() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
			setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
		})
	}, [])

	return (
		<div className='feed'>
			<StoryReel />
			<PostMaker />
			{posts.map((post) =>(
				<Post 
					key={post.id} 
					profilePic={post.data.profilePic}
					image={post.data.image}
					timestamp={post.data.timestamp}
					username={post.data.username}
					message={post.data.message}
				/>
			))}
		</div>
	)
}

export default Feed