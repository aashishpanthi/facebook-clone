import React,{ useState, useEffect } from 'react'
import '../ess/css/Feed.css'
import { useStateValue } from '../StateProvider'
import PostMaker from './PostMaker'
import StoryReel from './Feed/StoryReel'
import Post from './Feed/Post'
import db from '../firebase'

function Feed() {

	const [{user}, dispatch] = useStateValue()
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
			{posts.map((post) =>{
				const LikedORNOT = post.data.emailsLiked.filter((email)=> email===user.email)
				return(
					<Post 
						key={post.id} 
						docId = {post.id}
						profilePic={post.data.profilePic}
						image={post.data.image}
						timestamp={post.data.timestamp}
						username={post.data.username}
						message={post.data.message}
						likes={post.data.likes}
						emailsLiked={post.data.emailsLiked}
						LikedORNOT={LikedORNOT[0] ? true : false}
					/>
				)}
			)}
		</div>
	)
}

export default Feed