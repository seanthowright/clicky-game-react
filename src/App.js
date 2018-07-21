import React, { Component } from 'react';
import BandMember from "./components/BandMember";
import Header from "./components/Header";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import bandmembers from "./bandmembers.json";
import './App.css';

class App extends Component {
  state = {
    bandmembers,
    clickedIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedIds = this.state.clickedIds;

    if(clickedIds.includes(id)){
      this.setState({ clickedIds: [], score: 0, status:  "Sorry, you've lost the game! Click to try again!" });
      return;
    }else{
      clickedIds.push(id)

      if(clickedIds.length === 12){
        this.setState({score: 12, status: "Congratulations!!! You've succeded! Click to play again!", clickedIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ bandmembers, clickedIds, score: clickedIds.length, status: " " });

      for (let i = bandmembers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [bandmembers[i], bandmembers[j]] = [bandmembers[j], bandmembers[i]];
      }
    }
  }

  render() {
    return (
      <div className="Container">
        <Header />
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.bandmembers.map(bandmember => (
            <BandMember
              shuffleCards={this.shuffleCards}
              id={bandmember.id}
              key={bandmember.id}
              image={bandmember.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;