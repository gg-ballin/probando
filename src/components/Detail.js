import React, { Component } from 'react';

class Detail extends Component {
  
  
    render() {
    const {user} = this.props;
    console.log('user: ',user)
        return (
        <div className='tc'>
          <h1 className='f1'>User Detail</h1>
          <div className='tc  bg-light br3 pa3 ma2 dib bw2 shadow-1' id="card">
            
            <p><strong>Name:</strong> {user}</p>
            
          </div>
          
        </div>
   )
        
  }
}

export default Detail;