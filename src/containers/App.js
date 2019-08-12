import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import List from '../components/List'
import Detail from '../components/Detail'
import './App.css';

const history = createBrowserHistory();
const API_ENDPOINT = 'https://api.github.com/users'

class App extends Component {
  
  constructor() {
    super()
    this.state = { 
      user: {}, 
      searchfield: '', 
      users: ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]
    }
  }

    getData = (user) => fetch(`${API_ENDPOINT}/${user}`).then(results => results.json())
           
    fetchData = async () => {
      const users = await this.getData(user)
      let userComponent = users.map(user => (
        <div onclick= {() => this.selectUser(user)} className='tc grow bg-light br3 pa3 ma2 dib bw2 shadow-5' id="card">
          {/* <img src= {user.avatar_url} alt='faceperson'/> */}
          <p> {user.login}</p>
        </div>   
      ));
      this.setState({ users: userComponent })
    }
      
    

  componentDidMount() {
    this.fetchData()  
  }
  
  selectUser(user) {
    this.setState({ user: user })
    history.push('/details')
  }
  
  clearUser() {
    this.setState({ user: null })  
    history.goBack()
  }

  onSearchChange = (event) => {
      this.fetchData(event.target.value);
  }

  render() {
    const {users, user} = this.state;
    return (
      <Router history={history}>
          <Route exact path="/" component={()=> <List users={users} onSearchChange={this.onSearchChange.bind(this)} />} />
          <Route exact path="/details" component={()=> <Detail clearUser={()=> this.clearUser()} user={user} />} />
      </Router> )
  }
}

export default App;