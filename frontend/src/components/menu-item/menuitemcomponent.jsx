import React from 'react';
import { withRouter } from 'react-router-dom';


const MenuItem = ({title, size, history, imageurl}) => (
    <div  className={'menu-item '+size}  onClick={()=>history.push('/'+title)}>
         <div  style={{backgroundImage:'url('+imageurl+')'}}   className="backgroundimage">
            <div className='content'>
            <h1 className='title' >{title.toUpperCase()}</h1>
            </div>
        </div>
    </div>
)
export default withRouter(MenuItem);