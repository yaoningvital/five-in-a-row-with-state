import React from 'react'
import Board from './Board'
import { getInitialLayout } from '../utils'

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      history: [
        {
          next: 'B',
          layout: getInitialLayout(),
        },
      ],
      borderScale: 0.9,
    }
  }
  
  render () {
    let currentLayout = this.state.history[this.state.history.length - 1].layout
    let squareWidth = document.body.clientWidth * this.state.borderScale / 15
    
    return (
      <div className="game">
        <Board layout={currentLayout}
               squareWidth={squareWidth}
               borderScale={this.state.borderScale}
        />
      </div>
    )
  }
}

export default Game