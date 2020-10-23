import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import '../../ess/css/Post.css'

function Post({ profilePic, image, timestamp, username, message}) {
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
				<div className='post__option'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>

				<div className='post__option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>

				<div className='post__option'>
					<ShareIcon />
					<p>Comment</p>
				</div>

				<div className='post__option'>
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	)
}

export default Post