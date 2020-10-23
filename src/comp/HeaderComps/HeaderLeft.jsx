import React from 'react'
import '../../ess/css/Header.css'
import SearchIcon from '@material-ui/icons/Search'

function HeaderLeft() {
	return (
		<div className="header__left">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook-logo" />
			<div className='header__input'>
				<SearchIcon />
				<input type="text" placeholder="Search Facebook" />
			</div>
		</div>
	)
}

export default HeaderLeft