import React from 'react'
import '../../ess/css/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

function HeaderMiddle() {
	return (
		<div className="header__middle">
			<div className='header__options'>
				<HomeIcon fontSize="large" />
			</div>

			<div className='header__options'>
				<FlagIcon fontSize="large" />
			</div>

			<div className='header__options'>
				<SubscriptionsOutlinedIcon fontSize="large" />
			</div>

			<div className='header__options'>
				<StorefrontOutlinedIcon fontSize="large" />
			</div>

			<div className='header__options'>
				<SupervisedUserCircleIcon fontSize="large" />
			</div>
		</div>
	)
}

export default HeaderMiddle