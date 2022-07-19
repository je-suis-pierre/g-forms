import React from 'react'
import form_image from '../images/logo.png'
import { FiStar, FiSettings } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import avatarimage from '../images/2.jpg'
import { IoMdFolderOpen } from 'react-icons/io'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import MoeVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import './Formheader.css'

function Formheader() {
    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} style={{ height: '45px', width: '40px' }} alt="" />
                <input type="text" placeholder='untitled form' className='form_name' />
                <IoMdFolderOpen className='form_header_icon' style={{ marginRight: '10px' }}></IoMdFolderOpen>
                <FiStar className='form_header_icon' style={{ marginRight: '10px' }} />
                <span style={{ fontSize: '12px', fontWeight: '600' }}>All changes saved in Drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size='small' className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <AiOutlineEye className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <FiSettings className='form_header_icon' />
                </IconButton>

                <Button variant='contained' color='primary' href='#contained-buttons'>Send</Button>

                <IconButton>
                    <MoeVertIcon className='form_header_icon' />
                </IconButton>
                <IconButton>
                    <Avatar style={{ height: '30px', width: '30px' }} src={avatarimage} />
                </IconButton>
            </div>
        </div>
    )
}

export default Formheader