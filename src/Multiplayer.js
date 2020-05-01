import React, {Component} from 'react';


  function Square(props){
    return(
      <button className="square" style={props.winner}
        onClick={props.onClick}>
          {props.value}
        </button>
    );
  }
  
  class Board extends Component {

    renderSquare(i) {
      return <Square key={i}
      onClick={() => this.props.onClick(i)}
      winner={this.props.winner.includes(i)? {backgroundColor: "#00ff00"}: {}}
      value={this.props.squares[i]}
      />;
    }
  
    eachSquare = r => {

      let squares = [];
      let position = r * 3;
      for(let s=0; s<3;s++){
        squares.push(
          this.renderSquare(s + position)
        );
      }

      return(
        <div key={r} className="board-row">
          {squares}
        </div>
      )
    }

    render() {

      const row = [];

      for(let r=0;r<3;r++){
        row.push(
          this.eachSquare(r)
        );
      }

      return(
      <div>{row}</div>
      );
    }
  }
  
class Game extends Component {

    state={
      history:[{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext:true,
      location: [],
      weight: 900,
      toggleSort: true,
      winner: [],
    };

    calculateWinner = (squares,k) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

          if(k===1){
            this.setState({
              winner: lines[i],
            });
          }
          
          return squares[a] === "X" ? this.props.names.player1 : this.props.names.player2;
        }
      }
      return null;
    }

    handleClick = i => {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const location = this.state.location.slice(0, this.state.stepNumber);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (this.calculateWinner(squares,1) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        location: location.concat([i]),
      },() => {this.calculateWinner(this.state.history[history.length].squares,1);});
    }
  
    jumpTo = step => {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });

      if(step === this.state.history.length-1){
        this.calculateWinner(this.state.history[this.state.history.length-1].squares,1);
      }
      else{
        this.setState({
          winner: [],
        })
      }

    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares,0);

      const moves = history.map( (step, move) => {
        const desc = move ? 'Go to move #' + move :
        'Go to game start';

      const row = move ? "(" + Math.floor(this.state.location[move-1] / 3) + "," : '(NaN,';
      const column = move ? this.state.location[move-1] % 3 + ")" : 'NaN)';

      const weight = this.state.stepNumber === move ? 900 : 100;

      let position = null;
      if(move === 0){
      }
      else if(move % 2 === 0){
        position = this.props.names.player2;
      }
      else{
        position = this.props.names.player1;
      }

        return(
            <li key={move}>
      <button style={{fontWeight: weight}} onClick={() => this.jumpTo(move)}>{desc}</button>
        <p style={{display: "inline-block", marginLeft: "10px"}}>Location: {position} {row}{column}</p>
          </li>
        );
      });

      let status;
      if(winner){
        status = 'Winner: '+ winner;
      }
      else if(this.state.stepNumber === 9){
        status = 'Draw';
      }
      else{
        status = 'Next player: '+ (this.state.xIsNext ? this.props.names.player1: this.props.names.player2);
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
            winner={this.state.winner}
            squares={current.squares}
            onClick={this.handleClick}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button style={{marginTop: 5}} onClick={ () => this.setState({ toggleSort: !this.state.toggleSort}) }>Sort</button>
            <ol>{this.state.toggleSort?moves:moves.reverse()}</ol>
          </div>
        </div>
      );
    }
  }


  class Multiplayer extends Component{
    
    state = {
      startGame: false,
      names: {
          player1: '',
          player2: ''
        }
    }
    
    handleChange1 = e =>{
      this.setState({
        names: {
          ...this.state.names,
          player1: e.target.value
        }
      })
    }

    handleChange2 = e =>{
      this.setState({
        names: {
          ...this.state.names,
          player2: e.target.value
        }
      })
    }

    startGame = () =>{
      if(this.state.names.player1.length && this.state.names.player2.length > 0)
      {
        this.setState({startGame: true})
      }
      else{
        alert("Username Required")
      }

    }

    ActivateStartGame = e =>{
      if(e.key === 'Enter'){
        this.startGame();
      }
    }


    render(){

      
      const style={
        textAlign: 'center',
        fontSize: '4vh',
        fontWeight: 'bold'
      }

      return(
        <div>
          <div style={style}>
            Multiplayer
          </div>
          {
            this.state.startGame ?
            <div>
              <button className="change_name" onClick={() =>this.setState({startGame: false})}>Change UserName</button>
              <Game names={this.state.names} />
            </div>
             :
            <div className="input-box">
          <div className="player1-input">
            <label htmlFor="player1">First Player's UserName</label>
            <input onKeyPress={this.ActivateStartGame} onChange={this.handleChange1} id="player1" type="text" value={this.state.names.player1} required />
          </div>
          <div className="player2-input">
            <label htmlFor="player2">Second Player's UserName</label>
            <input onKeyPress={this.ActivateStartGame} onChange={this.handleChange2} id="player2" type="text" value={this.state.names.player2} required />
          </div>
          <div>
            <button onClick={this.startGame} type="submit">START</button>
          </div>
        </div>
          }        
        </div>
      )
    }
  }
  

  export default Multiplayer;