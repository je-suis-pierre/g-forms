import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Icon, IconButton } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import './Template.css'

import blank from '../images/logo.png'
import party from '../images/logo.png'
import contact from '../images/logo.png'

function Template() {
    return (
        <div className='template_section'>
            <div className="template_top">
                <div className="template_left">
                    <span style={{ fontSize: '16px', color: '202124' }}>Start new form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">Template gallery<UnfoldMoreIcon />
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card">
                    <img src={blank} className='card_image' alt="no image" />
                    <p className='card_title'>Blank</p>
                </div>
                <div className="card">
                    <img src={party} className='card_image' alt="no image" />
                    <p className='card_title'>Party</p>
                </div>
                <div className="card">
                    <img src={contact} className='card_image' alt="no image" />
                    <p className='card_title'>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Template