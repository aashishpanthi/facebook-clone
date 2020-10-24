import React,{useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import PublicIcon from '@material-ui/icons/Public';
import { useStateValue } from '../../StateProvider'
import { Button } from '@material-ui/core';
import db,{storage} from '../../firebase'
import firebase from 'firebase'
import {Avatar} from '@material-ui/core'
import '../../ess/css/PostPopup.css'

function PostPopup({setIsOpen}) {

	const [{user}, dispatch] = useStateValue()
	const [status, setStatus] = useState('')
	const [image, setImage] = useState(null)
	const [url, setUrl] = useState('')
	const [hasSelectedImage, setHasSelectedImage] = useState(false)

	const handleFile = e =>{
		if(e.target.files[0]){
			setImage(e.target.files[0])
			setHasSelectedImage(true)
		}
	}

	const Post = e =>{
		e.preventDefault()

		if(hasSelectedImage){
			const uploadTask = storage.ref(`images/${image.name}`).put(image)
			uploadTask.on(
					'state_changed',
					snapshot => {},
					error => {
						console.log(error)
					},
					()=>{
						storage.ref('images')
							.child(image.name)
							.getDownloadURL()
							.then(url =>{
								setUrl(url)
							})
					}
				)
		}

		db.collection('posts').add({
			message: status,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			image: url,
			profilePic: user.photoURL,
			username: user.displayName,
		})

		setStatus('')
		setUrl('')
		setHasSelectedImage(false)
	}

	return (
		<div className='postPopup'>
			<div className='postPopup__headerItems'>
				<h2>Create Post</h2>
				<ClearIcon className='postPopup__clearIcon' onClick={() => setIsOpen(false)} />
			</div>

			<div className='postPopup__userInfo'>
				<Avatar src={user.photoURL} />
				<div>
					<h4>{user.displayName}</h4>
					<strong>
						<PublicIcon className='postPopup__publicIcon' />
						<small>
							Public
						</small>
					</strong>
				</div>
			</div>
			<form>
				<input 
					onChange={e =>setStatus(e.target.value)} 
					placeholder={`What's on your mind, ${user.displayName.split(' ')[0]}?`}
				/>

				<input type="file" className='postPopup__fileButton file-upload-btn' onChange={handleFile} />

				<input onChange={e => setUrl(e.target.value)} className='postPopup__imageUrl' placeholder='image URL' value={url} />
				<Button type='submit' onClick={Post}>
					Post
				</Button>
			</form>

		</div>
	)
}

export default PostPopup