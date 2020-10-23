import React from 'react'
import { HeaderLeft, HeaderRight, HeaderMiddle } from './HeaderComps'
import '../ess/css/Header.css'

function Header() {
	return (
		<div className="header">
			<HeaderLeft />
			<HeaderMiddle />
			<HeaderRight />
		</div>
	)
}

export default Header