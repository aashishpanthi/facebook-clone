import React from 'react'
import SidebarRow from './Sidebar/SidebarRow'
import '../ess/css/Sidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ChatIcon from '@material-ui/icons/Chat'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import { useStateValue } from '../StateProvider'

function Sidebar() {

	const [{user}, dispatch] = useStateValue()

	return (
		<div className='sidebar'>
			<SidebarRow src={user.photoURL} title={user.displayName}  />
			<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"  />
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
			<SidebarRow Icon={PeopleIcon} title='Friends' />
			<SidebarRow Icon={ChatIcon} title='Messenger' />
			<SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
			<SidebarRow Icon={VideoLibraryIcon} title='Videos' />
			<SidebarRow Icon={ExpandMoreOutlined} title='More' />
		</div>
	)
}

export default Sidebar