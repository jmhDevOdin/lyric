import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../utils/StateProvider';

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.clipartpanda.com%2Fcolorful-musical-notes-png-LiKrGdB6T.png&f=1&nofb=1' alt='logo'/>

            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar;
