import React, {Component} from 'react';
import AbilityScores from './AbilityScores';
import BasicInformation from './BasicInformation';
import SkillList from './SkillList';
import {getInitialState} from './data';
import {
  map,
  get,
  find,
} from 'lodash/fp';
import {
  abilityScores,
  skills,
  incAbility,
  decAbility,
} from './calculations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...getInitialState(),
      race: {name: ''},
      aligment: '',
      name: '',
      playerName: ''
    };
  }
  raceNames = () => map(get('name'), this.state.races)
  handleAddAbilityScore = (name) => {
    this.setState({
      abilities: incAbility(name, this.state.abilities)
    });
  }
  handleRemoveAbilityScore = (name) => {
    this.setState({
      abilities: decAbility(name, this.state.abilities)
    });
  }
  handleNameChange = (name) => {
    this.setState({
      name
    });
  }
  handlePlayerNameChange = (playerName) => {
    this.setState({
      playerName
    });
  }
  handleRaceChange = (raceName) => {
    this.setState({
      race: find(({name}) => name === raceName, this.state.races)
    });
  }
  handleAligmentChange = (aligment) => {
    this.setState({
      aligment
    });
  }
  render() {
    return (
      <div className='App pure-g'>
        <span className='pure-u-sm-1-1'>
          <BasicInformation classChosen={{}}
            race={this.state.race.name}
            races={this.raceNames()}
            aligment={this.state.aligment}
            aligments={this.state.aligments}
            onNameChange={this.handleNameChange}
            onPlayerNameChange={this.handlePlayerNameChange}
            onRaceChange={this.handleRaceChange}
            onAligmentChange={this.handleAligmentChange}
            />
        </span>
        <span className='pure-u-sm-1-4'>
          <AbilityScores abilityScores={abilityScores(
            this.state.abilities,
            this.state.race.abilities
          )}
            onAddAbilityScore={this.handleAddAbilityScore}
            onRemoveAbilityScore={this.handleRemoveAbilityScore} />
        </span>
        <span className='pure-u-sm-1-3'>
          <SkillList skills={skills(
            this.state.skills,
            abilityScores(
              this.state.abilities,
              this.state.race.abilities
            )
          )} />
        </span>
      </div>
    );
  }
}

export default App;