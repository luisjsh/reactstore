import React from 'react';

import MenuItem from '../menu-item/menuitemcomponent.jsx';

class Directory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
        sections:[{
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            linkurl: '/hats'
        },{
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id:2,
            linkurl: ''
        },{
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkurl:''
        },{
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size:'large',
            id:4,
            linkurl:''
        },{
            title: 'mens',
            imageUrl: 'https://static4.fashionbeans.com/wp-content/uploads/2018/02/ss18trendprev-3.jpg',
            size: 'large',
            id:5,
            linkurl:''
        }]
        } 
    }
 

    render(){
        return(
            <div className="directory-menu">
               
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageurl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory;