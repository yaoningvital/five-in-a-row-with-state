import React from 'react'

function Square (props) {
  let {value, squareWidth, index, handleClick, latestChessIndex, winner, winnerIndices} = props
  let display = value ? 'block' : 'none'
  
  let chessPieceClassName = ''
  if (value === 'black') {
    chessPieceClassName = 'black-chess'
  } else if (value === 'white') {
    chessPieceClassName = 'white-chess'
  }
  
  // 如果当前索引等于最新下的棋子所在的索引，则显示一个红点
  let redDotDisplay = 'none'
  if (!winner && index[0] === latestChessIndex[0] && index[1] === latestChessIndex[1]) {
    redDotDisplay = 'block'
  }
  
  let isOneOfFiveInRow = false
  if (winner) {
    for (let i = 0; i < winnerIndices.length; i++) {
      if (winnerIndices[i][0] === index[0] && winnerIndices[i][1] === index[1]) {
        isOneOfFiveInRow = true
        break
      }
    }
  }
  
  let chessBoxShadow = 'none'
  if (isOneOfFiveInRow) {
    chessBoxShadow = ' 0 0 5px red'
  }
  
  return (
    <div className="square"
         style={{
           width: squareWidth + 'px',
           height: squareWidth + 'px',
         }}
         onClick={() => handleClick(index)}
    >
      <button
        className={chessPieceClassName}
        style={{
          width: squareWidth * 0.85 + 'px',
          height: squareWidth * 0.85 + 'px',
          display: display,
          borderRadius: squareWidth * 0.85 + 'px',
          boxShadow: chessBoxShadow
        }}
      />
      <div className="red-dot" style={{
        display: redDotDisplay
      }}/>
    </div>
  )
}

export default Square