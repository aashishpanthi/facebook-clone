import React from 'react'
import { Avatar } from '@material-ui/core'
import '../../ess/css/Sidebar.css'

function SidebarRow({title, Icon, src}) {
	return (
		<div className='SidebarRow'>
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	)
}

export default SidebarRow