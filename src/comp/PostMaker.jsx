import React,{useState} from 'react'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../StateProvider'
import PostPopup from './Feed/PostPopup'
import db from '../firebase'
import firebase from 'firebase'
import '../ess/css/PostMaker.css'

function PostMaker() {

	const [{user}, dispatch] = useStateValue()
	const [status, setStatus] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const url = ''

	const handleStatusInput = e => {
		setStatus(e.target.value)
	}

	const handleSubmit = e =>{
		e.preventDefault()

		db.collection('posts').add({
			message: status,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			image: url,
			profilePic: user.photoURL,
			username: user.displayName,
		})

		setStatus('')
	}

	return (
		<div className='postmaker'>
			<div className='postmaker__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input onChange={handleStatusInput} placeholder={`What's on your mind ${user.displayName}`} value={status} className='postmaker__statusInput' />
					<button onClick={handleSubmit} type='submit'>
						Submit
					</button>				
				</form>
			</div>

			<div className='postmaker__bottom'>
				<div className='postmaker__option'>
					<VideocamIcon style={{color:'red'}} />
					<h3>Live Video</h3>
				</div>

				<div className='postmaker__option' onClick={()=> setIsOpen(true)}>
					<PhotoLibraryIcon style={{color:'green'}} />
					<h3>Photo/Video</h3>
					{isOpen && <PostPopup setIsOpen={setIsOpen} />}
				</div>

				<div className='postmaker__option'>
					<InsertEmoticonIcon style={{color:'orange'}} />
					<h3>Felling/Activity</h3>
				</div>
			</div>
		</div>
	)
}

export default PostMaker