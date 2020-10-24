import React,{useState} from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import PublicIcon from '@material-ui/icons/Public';
import { useStateValue } from '../../StateProvider'
import { Button } from '@material-ui/core';
import db,{storage} from '../../firebase'
import firebase from 'firebase'
import {Avatar} from '@material-ui/core'
import '../../ess/css/PostPopup.css'

function PostPopup({changeState}) {

	const [{user}, dispatch] = useStateValue()
	const [status, setStatus] = useState('')
	const [image, setImage] = useState(null)
	const [Url, setUrl] = useState('')
	const [hasSelectedImage, setHasSelectedImage] = useState(false)
	const [Progress, setProgress] = useState(0)

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
					snapshot => {
						const progress = Math.round(
								(snapshot.bytesTransferred / snapshot.totalBytes) *100
							)
						setProgress(progress)
					},
					error => {
						console.log(error)
					},
					()=>{
						storage.ref('images')
							.child(image.name)
							.getDownloadURL()
							.then(url =>{
								setUrl(url)
								pushData(url)
								clearInputs()
							})
					}
				)
		}

		else{
			pushData()
			clearInputs()
		}
	}

	const pushData = (URL = Url) =>{
		db.collection('posts').add({
			message: status,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			image: URL,
			profilePic: user.photoURL,
			username: user.displayName,
		})
	}

	const clearInputs = () =>{
		setStatus('')
		setUrl('')
		setHasSelectedImage(false)
	}

	return (
		<div className='postPopup'>
			<div className='postPopup__headerItems'>
				<h2>Create Post</h2>
				<ClearIcon className='postPopup__clearIcon' onClick={changeState} />
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

				<input type="file" className='postPopup__fileButton' accept="image/*" onChange={handleFile} />
				{Progress ? (<progress value={Progress} max='100'></progress>) : null}
				<h3 style={{textAlign:'center'}}>OR</h3>
				<input onChange={e => setUrl(e.target.value)} className='postPopup__imageUrl' placeholder='image URL' value={Url} />
				<Button type='submit' onClick={Post}>
					Post
				</Button>
			</form>

		</div>
	)
}

export default PostPopup