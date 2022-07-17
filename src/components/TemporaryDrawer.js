import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core'
import formimage from '../images/logo.png'
import { FiSettings } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'
import './Drawer.css'

const useStyles = makeStyles({
    listItem: {
        marginLeft: '20px', fontSize: '14px', fontWeight: '500', color: 'grey'
    },
    slideImages: {
        height: '20px', width: '20px'
    }
})

function TemporaryDrawer() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <div style={{ width: '250px' }} role='presentation'>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText style={{ fontSize: '48px', marginLeft: '5px' }}>
                        <span>GooGoo Dogs</span>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: '8px', marginRight: '8px', marginTop: '15px' }}>
                <ListItem className='list_item'>
                    <img src={formimage} className={classes.slideImages} alt='Dogs' />
                    <div className={classes.listItem}>Dogs</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={formimage} className={classes.slideImages} alt='Cats' />
                    <div className={classes.listItem}>Cats</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={formimage} className={classes.slideImages} alt='Rats' />
                    <div className={classes.listItem}>Rats</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={formimage} className={classes.slideImages} alt='Rabbits' />
                    <div className={classes.listItem}>Rabbits</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: '8px', marginRight: '8px', marginTop: '15px' }}>
                <ListItem className='list_item'>
                    <FiSettings /><div style={{ marginLeft: '20px', fontSize: '14px' }}>Settings</div>
                </ListItem>
                <ListItem className='list_item'>
                    <BsQuestionCircle /><div style={{ marginLeft: '20px', fontSize: '14px', fontWeight: '500', color: 'grey' }}>Help & Feedback</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ marginLeft: '8px', marginRight: '8px', marginTop: '15px' }}>
                <ListItem>
                    <img src={formimage} style={{ height: '20px', width: '20px' }} alt='Drive' />
                    <div style={{ marginLeft: '20px', fontSize: '14px' }}>Drive</div>
                </ListItem>
            </List>
            <Divider />
        </div>
    )

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={state['left']} onClose={toggleDrawer('left', false)} anchor={'left'}>
                {list('left')}
            </Drawer>
        </React.Fragment>
    )
}

export default TemporaryDrawer