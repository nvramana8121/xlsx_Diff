import React, { Component } from 'react';
import Raduim,{StyleRoot} from 'radium';
import logo from './logo.svg';
import './App.css';
import Remo from './Person/Remo';

class App extends Component {

  state = {
    persons: [
      { name: 'uma' },
      { name: 'gani' },
      { name: 'laxmi' }
    ],
    love: [
      { story: 'i loved you' },
      { story: 'i married you' },
      { story: 'i want a sweet daughter' }
    ]

  }

  switchName = (name) => {
    console.log("i clicked");
    this.setState(
      {
        persons: [
          { name: name },
          { name: name },
          { name: name }
        ],
        toggle: false
      })
  }

  onChangeHandler = (event,index) => {

    const person = {...this.state.persons[index]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({
      persons: persons
    })
  }

  toggleTheFunction = () => {
    const newToggle = !this.state.toggle;
    this.setState({ toggle: newToggle });
  }


  deletePerson = (itemIndex) => {
   // const persons  = this.state.persons;
    //take copy instead of real object
    const persons = [...this.state.persons]
    persons.splice(itemIndex,1);
    //this.setState(persons);
    this.setState({persons:persons});
  }
  render() {
    const style = {
      backgroundColor: 'white'
    };

    const style1 = {
      backgroundColor: 'red',
      cursor:'pointer',
      ':hover':{
        backgroundColor: 'lightblue',
        color:'black'
      }
    }
    let person=null;

    if(this.state.toggle)
    {
      person = (<div>
        {
          this.state.persons.map((per,index) =>{
            return <Remo name={per.name} key={index} 
            click={() => this.deletePerson(index)}
            changed={(event) => this.onChangeHandler(event,index)}/>;
          })
        }
      </div>);
      // person = (
      //   <div>
      //      <Remo name={this.state.persons[0].name}
      //         click={this.switchName.bind(this, 'uma..')}>{this.state.love[0].story}</Remo>
      //       <Remo
      //         click={this.switchName.bind(this, 'gani..')}
      //         changed={this.onChangeHandler}
      //         name={this.state.persons[1].name}>{this.state.love[1].story}</Remo>
      //       <Remo name={this.state.persons[2].name}
      //         click={this.switchName.bind(this, 'laxmi..')}>{this.state.love[2].story}</Remo>

      //   </div>
      // );
    }

    style1[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
    }
    return (
      <StyleRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={style1} onClick={this.toggleTheFunction}>click Me</button>
        {person}
{/*         
         //this.state.toggle ?
           <div>
            <Remo name={this.state.persons[0].name}
              click={this.switchName.bind(this, 'uma..')}>{this.state.love[0].story}</Remo>
            <Remo
              click={this.switchName.bind(this, 'gani..')}
              changed={this.onChangeHandler}
              name={this.state.persons[1].name}>{this.state.love[1].story}</Remo>
            <Remo name={this.state.persons[2].name}
              click={this.switchName.bind(this, 'laxmi..')}>{this.state.love[2].story}</Remo>

          </div>//:null */}
       

      </div>
      </StyleRoot>
    );

    //return React.createElement('div',{className : 'App'},React.createElement('h1',{className:'App-logo'},'this is venkat uma'));
  }
}

export default Raduim(App);
