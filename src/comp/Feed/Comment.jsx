import React from 'react'
import {Avatar} from '@material-ui/core'
import '../../ess/css/Comment.css'

const Comment= ({username, timestamp, postId, profilePic, comment}) => {

	return (
		<div className='Comment'>
			<div className='Comment__Info'>	
				<Avatar className='Comment__avatar' src={profilePic} />
				<div className='Comment__main'>
					<h3>{username}</h3>
					<p className='Comment__comment' > {comment} </p>
				</div>
			</div>
			<div className='Comment__moreInfo'>
					<span className='Comment__like'>Like</span>
					<span className='Comment__reply'>Reply</span>
					<span className='Comment__timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
			</div>
		</div>
	)
}

export default Comment