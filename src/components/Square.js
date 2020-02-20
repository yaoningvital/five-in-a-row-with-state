import React from 'react'

class Square extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let {value, squareWidth} = this.props
    let display = value ? 'block' : 'none'
    
    let chessPieceClassName = ''
    if (value === 'black') {
      chessPieceClassName = 'black-chess'
    } else if (value === 'white') {
      chessPieceClassName = 'white-chess'
    }
    
    return (
      <div className="square"
           style={{
             width: squareWidth + 'px',
             height: squareWidth + 'px',
           }}>
        <button
          className={chessPieceClassName}
          style={{
            width: squareWidth * 0.85 + 'px',
            height: squareWidth * 0.85 + 'px',
            display: display,
            // backgroundColor: value,
            borderRadius: squareWidth * 0.85 + 'px',
          }}/>
      </div>
    )
  }
}

export default Square