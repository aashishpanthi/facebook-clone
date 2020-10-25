import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import '../../ess/css/nav.css';

function MessageRow({ profilePic, timestamp, username, message, CLASSNAME }) {
	const isThumb = message === 'ThIsIsthumBbB'
	const cName = isThumb ? 'yesThumb' : null

	return (
		<div className={`messageRow ${CLASSNAME} ${cName}`}>
			{ CLASSNAME==='received' && <Avatar className='post__avatar' src={profilePic} />}
			{isThumb ? (<ThumbUpRoundedIcon className="messageRow__renderedThumbIcon" />)
			:
			(<div className='messageRow__detailedBox'>
				<h5>{username}</h5>
				<h3>{message}</h3>
				<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
			</div>)
			}	
		</div>
	)
}

export default MessageRow