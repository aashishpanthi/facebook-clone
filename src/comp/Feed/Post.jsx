import React,{useState, useEffect} from 'react'
import { useStateValue } from '../../StateProvider'
import Comment from './Comment'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import db from '../../firebase'
import firebase from 'firebase'
import '../../ess/css/Post.css'

function Post({ profilePic, image, timestamp, username, message, docId, likes, LikedORNOT, emailsLiked}) {

	const [{user}, dispatch] = useStateValue()
	const [comments, setComments] = useState([])
	const email = user.email
	const [likedORNOt, setLikedORNOt] = useState(LikedORNOT)
	const [commentInput, setCommentInput] = useState('')
	const [EMAILSLINKED, setEMAILSLINKED] = useState([...emailsLiked])

	useEffect(() => {
		db.collection('comments').orderBy('timestamp','desc').onSnapshot(snapshot =>{
			setComments(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
		})
	}, [])

	const like = e =>{
		db.collection('posts').doc(docId).update({
			likes : likedORNOt ? emailsLiked.length : emailsLiked.length + 1,
			emailsLiked : likedORNOt ? [...EMAILSLINKED] :EMAILSLINKED.filter((mail)=> mail !== email) 
		}).then(()=> setLikedORNOt(!likedORNOt))
	}

	const handleCommentSubmit = e =>{
		e.preventDefault()

		db.collection('comments').add({
			username: user.displayName,
			profilePic: user.photoURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			comment: commentInput,
			postId: docId,
		}).then(()=> setCommentInput(''))
	}

	return (
		<div className='post'>
			<div className='post__top'>
				<Avatar className='post__avatar' src={profilePic} />
				<div className='post__topInfo'>
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>

			<div className='post__bottom'>
				<p>{message}</p>
			</div>

			<div className='post__image'>
			{image && <img src={image} alt={`error with ${username}'s pic`} />}
			</div>

			<div className='post__options'>
				<div className='post__option' onClick={like}>
					<ThumbUpIcon className={likedORNOt ? 'post__liked' : ''} />
					<strong style={{marginLeft:'5px'}}> {likes} </strong>
				</div>

				<div className='post__option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>

				<div className='post__option'>
					<ShareIcon />
					<p>Share</p>
				</div>

				<div className='post__option'>
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>

			<div className='postmaker__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input onChange={e => setCommentInput(e.target.value) } placeholder={` Write a comment...`} value={commentInput} className='postmaker__statusInput' />
					<button onClick={handleCommentSubmit} type='submit'>
						Submit
					</button>				
				</form>
			</div>

			<div className='post__comments'>
				{comments.filter((cmt => cmt.data.postId === docId)).map((comment) =>(
					<Comment 
						key={comment.id} 
						profilePic={comment.data.profilePic}
						timestamp={comment.data.timestamp}
						username={comment.data.username}
						comment={comment.data.comment}
					/>
				))}
			</div>
		</div>
	)
}

export default Post