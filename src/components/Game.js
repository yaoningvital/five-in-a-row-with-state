import React from 'react'
import Board from './Board'
import { calculateWinner, getInitialLayout } from '../utils'
import WhiteChessPieceImg from '../assets/images/white_bg.png'
import BlackChessPieceImg from '../assets/images/black_bg.png'
import _ from 'lodash'

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.replay = this.replay.bind(this)
    this.goBack = this.goBack.bind(this)
    this.state = {
      history: [
        {
          next: 'black',
          layout: getInitialLayout(),
          latestChessIndex: [null, null], //最新落子的索引
        },
      ],
      borderScale: 0.9,
      winnerObj: {
        winner: null,
        indices: null
      }
    }
  }
  
  goBack () {
    let newHistory = this.state.history.slice(0, this.state.history.length - 1)
    this.setState({
      history: newHistory,
      winnerObj: {
        winner: null,
        indices: null
      }
    })
  }
  
  replay () {
    let newHistory = this.state.history.slice(0, 1)
    
    this.setState({
      history: newHistory,
      winnerObj: {
        winner: null,
        indices: null
      }
    })
  }
  
  handleClick (index) {
    if (this.state.winnerObj.winner) return
    
    let [rowIndex, columnIndex] = index // 点击的这个格子的索引
    let newLayout = _.cloneDeep(this.state.history[this.state.history.length - 1].layout)
    let nextPlayer = this.state.history[this.state.history.length - 1].next
    
    if (newLayout[rowIndex][columnIndex]) return // 如果这个格子已经有棋子了，则返回
    
    newLayout[rowIndex][columnIndex] = nextPlayer
    
    // 更新棋子布局 history
    let newHistory = _.cloneDeep(this.state.history)
    newHistory.push({
      next: nextPlayer === 'black' ? 'white' : 'black',
      layout: newLayout,
      latestChessIndex: [rowIndex, columnIndex],
    })
    
    let winnerObj = calculateWinner(newLayout, nextPlayer)
    
    
    this.setState({
      history: newHistory,
      winnerObj: winnerObj
    }, () => {
      if (this.state.winnerObj.winner) {
      
      }
    })
  }
  
  
  render () {
    let {history} = this.state
    let currentLayout = this.state.history[this.state.history.length - 1].layout
    let latestChessIndex = this.state.history[this.state.history.length - 1].latestChessIndex
    let squareWidth = document.body.clientWidth * this.state.borderScale / 15
    let nextSrc = history[history.length - 1].next === 'black' ? BlackChessPieceImg : WhiteChessPieceImg
    
    let winnerSrc = null
    if (this.state.winnerObj.winner === 'black') {
      winnerSrc = BlackChessPieceImg
    } else if (this.state.winnerObj.winner === 'white') {
      winnerSrc = WhiteChessPieceImg
    }
    
    
    return (
      <div className="game">
        <div className="status"
             style={{
               width: this.state.borderScale * 100 + '%'
             }}>
          {/*下一步*/}
          {
            !this.state.winnerObj.winner &&
            <div className="next">
              <span>下一步：</span>
              <img src={nextSrc} alt="" style={{
                display: 'block',
                width: squareWidth + 'px',
                height: squareWidth + 'px',
              }}/>
            </div>
          }
          
          {/*赢家*/}
          {
            this.state.winnerObj.winner &&
            <div className="winner">
              <span>赢家是：</span>
              <img src={winnerSrc} alt="" style={{
                display: 'block',
                width: squareWidth + 'px',
                height: squareWidth + 'px',
              }}/>
            </div>
          }
        </div>
        <Board layout={currentLayout}
               latestChessIndex={latestChessIndex}
               squareWidth={squareWidth}
               borderScale={this.state.borderScale}
               handleClick={(index) => this.handleClick(index)}
               winner={this.state.winnerObj.winner}
               winnerIndices={this.state.winnerObj.indices}
        />
        <div className="btn-area">
          {/*返回上一步按钮*/}
          <button className="go-back"
                  disabled={history.length === 1}
                  onClick={this.goBack}
          >返回上一步
          </button>
          {/*  重玩*/}
          <button onClick={this.replay}>重玩</button>
        </div>
      
      </div>
    )
  }
}

export default Game