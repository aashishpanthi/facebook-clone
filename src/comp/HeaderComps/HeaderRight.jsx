import React from 'react'
import '../../ess/css/Header.css'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../../StateProvider'
import HeaderRightItem from './HeaderRightItem'

function HeaderRight() {
	
	const [{user}, dispatch] = useStateValue()

	return (
		<div className='header__right'>
			<div className='header__info'>
				<Avatar className='header__infoAvatar' src={user.photoURL} />
				<h4>{user.displayName.split(' ')[0]}</h4>
			</div>

			<HeaderRightItem />
		</div>
	)
}

export default HeaderRight