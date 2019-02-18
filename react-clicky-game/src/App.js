import React, { Component } from "react";
import FriendCard from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedArray: [],
    count: 0,
    highScore: 0,
    clicked: [],
    displayArray: []
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
      console.log("Before click: " + JSON.stringify(this.state.clicked));

    let clicked = this.state.clicked.concat(id);

      console.log("ID: " + id);
    
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends }); 
    
    this.setState({ clicked: clicked });

      console.log("Current click: " + JSON.stringify(clicked));

      console.log("Clicked Array before new set state: " + JSON.stringify(this.state.clickedArray));
      
      console.log("Clicked check result: " + clicked.some(v=> this.state.clickedArray.indexOf(v) !== -1))

      if (clicked.some(v=> this.state.clickedArray.indexOf(v) !== -1) &&      (this.state.count > this.state.highScore)) {
          this.setState({ highScore: this.state.count });
          this.setState({ count: 0 });
          this.setState({ clickedArray: [] });
          this.setState({ clicked: [] });
        return;
      } else if (clicked.some(v=> this.state.clickedArray.indexOf(v) !== -1)) {
          this.setState({ count: 0 });
          this.setState({ clickedArray: [] });
          this.setState({ clicked: [] });
          return;
      } else {
          this.setState({ count: this.state.count + 1 });
          // shuffle function
          this.shuffleCards()
      }
  
    const clickedArray = this.state.clickedArray.concat(id);
    // Reset the clicked array to empty after
    this.setState({ clickedArray: clickedArray });

      console.log("Clicked Array: " + JSON.stringify(clickedArray));

    this.setState({ clicked: [] });

      console.log("After null: " + JSON.stringify(clicked));
      console.log("----------------------------------");
    
  };

  // updateScore = id => {
  //   let clicked = this.state.clickedArray.concat(this.id);

  //   console.log("Clicked: " + clicked);
  //   this.setState({ count: this.state.count + 1 });  

  // }

  shuffleCards = () => {
        let a = this.state.friends;
        let b = shuffle(a);
        
        function shuffle(arr) {
          let i,
              j,
              temp;
          for (i = arr.length - 1; i > 0; i--) {
              j = Math.floor(Math.random() * (i + 1));
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
          return arr;    
      };
      console.log("Array b: " + JSON.stringify(b));
      // this.setState({ displayArray: b });
      //console.log(JSON.stringify(this.state.displayArray));
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  componentDidMount() {
    // this.handleClick();
    this.shuffleCards();
  }
  render() {
    return (
      <Wrapper>
        <Title count={this.state.count} highScore={this.state.highScore}></Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            // updateScore={this.updateScore} 
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;