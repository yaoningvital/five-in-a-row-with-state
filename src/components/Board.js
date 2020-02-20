import React from 'react'
import Square from './Square'

class Board extends React.Component {
  constructor (props) {
    super(props);
  }
  
  
  render () {
    let {layout, squareWidth, borderScale} = this.props
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
              />
            ))
          })
        }
      </div>
    )
  }
}

export default Board
