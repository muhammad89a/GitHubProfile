import React from 'react';
import CardList from './component/CardList/CardList';
import Form from './component/Form/Form';

import './App.css';


const testData = [
  {name: "Mohammad Mahamid", avatar_url: "https://avatars3.githubusercontent.com/u/24229962?v=4", company: "@GalilSoftware"},
];


class App extends React.Component {
  state = {
    profiles: [...testData],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmited={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}



export default App;
