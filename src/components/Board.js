import React from 'react'
import Square from './Square'

function Board (props) {
  let {layout, squareWidth, borderScale, handleClick,
    latestChessIndex, winner, winnerIndices} = props
  
  return (
    <div className="board"
         style={{
           width: borderScale * 100 + '%'
         }}>
      {
        layout.map((rowArray, rowIndex) => {
          return rowArray.map((value, columnIndex) => (
            <Square value={value}
                    key={columnIndex}
                    squareWidth={squareWidth}
                    index={[rowIndex, columnIndex]}
                    handleClick={handleClick}
                    latestChessIndex={latestChessIndex}
                    winner={winner}
                    winnerIndices={winnerIndices}
            />
          ))
        })
      }
    </div>
  )
}

export default Board
