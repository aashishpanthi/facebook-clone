import React from 'react'
import '../../ess/css/Header.css'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ForumIcon from '@material-ui/icons/Forum'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from '../../StateProvider'

function HeaderRight() {
	
	const [{user}, dispatch] = useStateValue()

	return (
		<div className='header__right'>
			<div className='header__info'>
				<Avatar src={user.photoURL} />
				<h4>{user.displayName}</h4>
			</div>

			<IconButton>
				<AddIcon />
			</IconButton>

			<IconButton>
				<ForumIcon />
			</IconButton>

			<IconButton>
				<NotificationsActiveIcon />
			</IconButton>

			<IconButton>
				<ExpandMoreIcon />
			</IconButton>
		</div>
	)
}

export default HeaderRight