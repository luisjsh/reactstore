import React from 'react'

import './style.scss'
import SearchBar from '../searchBar/searchBar'

const data = [{id:1 , name:'hats' , url: './hats.svg'} , {id:2 , name:'shoes' , url:'./shoes.svg'},{id:3 , name:'pants' , url: './pants.svg'},{id:4 , name:'dress' , url:'./dress.svg'},,{id:5 ,name:'tshirt', url:'./tshirt.svg'}]

const HomepageBg = () => (
    <div >
        <div className='Background'>
            <header className='header'>
                <div className='items'>
                <a className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam impedit assumenda alias dolores officia tenetur id commodi qui modi asperiores corrupti neque illum quidem itaque, expedita eveniet optio ea quisquam?</a>
            <br></br>
                <button className='button' onClick={()=>{alert('hay que rico')}}>Sing Up Now</button>
                </div>
                <div className='image'>

                </div>
            </header>
        </div>
        <div className='cardBg'>
            <section  className='card'>
                <SearchBar type='search' />
                <div className='cardsparents'>
                    <div className='female'>
                    </div>
                    <div className='male'>
                    </div>
                </div>
              <div className='cardsItem'>
              {
                   data.map(({ id, name,url}) => (
                    <div style={{backgroundImage: 'url('+url+')'}}  className='items' key={id}  >
                           {name} 
                    </div>
                   ))
               }
              </div>
            </section>
        </div>
    </div>
)

export default HomepageBg