import React, { Component } from 'react';


import Scroll from './Scroll';

class List extends Component {
  

  
  render() {
    const {users} = this.props;
    const topFive = users
    const listItems =topFive.map((number) =>
          <div className='tc grow bg-light br3 pa3 ma2 dib bw2 shadow-5' id="card">
            <p><strong>{number} </strong></p>
          </div>);

    
        return (
        <div className='tc'>
          <h1 className='f1'>Nucleus</h1>
          <Scroll>
          <div>
            {listItems}
          </div>
          </Scroll>
          
      </div>
   )
  }
}

export default List;