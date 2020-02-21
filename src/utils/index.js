/**
 * 生成初始的layout
 * @returns {[]}
 */
export function getInitialLayout () {
  let initialLayout = []
  for (let i = 0; i < 15; i++) {
    let rowArray = []
    for (let j = 0; j < 15; j++) {
      rowArray.push(null)
    }
    initialLayout.push(rowArray)
  }
  
  return initialLayout
}

// export function getInitialLayout () {
//   return [
//     [null, null, null, null, null, 'white', 'black', 'black', 'black', 'white', 'black', 'black', null, null, null,],
//     [null, null, null, null, null, 'black', 'white', 'black', 'white', 'black', null, 'black', null, null, null,],
//     [null, null, null, null, null, 'white', 'white', 'white', 'black', 'white', null, 'white', 'black', null, null,],
//     [null, null, null, null, null, 'black', 'black', null, 'white', 'black', 'black', 'black', 'black', null, null,],
//     [null, null, null, null, null, 'black', 'white', 'black', 'black', 'black', 'black', 'white', 'black', null, null,],
//     [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
//     [null, null, null, null, null, 'white', 'white', null, 'black', 'white', 'black', 'white', null, null, null,],
//     [null, null, null, null, null, 'white', 'black', 'black', 'black', 'white', 'black', 'black', null, null, null,],
//     [null, null, null, null, null, 'black', 'white', 'black', 'white', 'black', null, 'black', null, null, null,],
//     [null, null, null, null, null, 'white', 'white', 'white', 'black', 'white', null, 'white', 'black', null, null,],
//     [null, null, null, null, null, 'black', 'black', null, 'white', 'black', 'black', 'black', 'black', null, null,],
//     [null, null, null, null, null, 'black', 'white', 'black', 'black', 'black', 'black', 'white', 'black', null, null,],
//     [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
//     [null, null, null, null, null, 'white', 'white', null, 'black', 'white', 'black', 'white', null, null, null,],
//     [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
//   ]
// }

export function calculateWinner (currentLayout, chessColor) {
  let winnerObj = {
    winner: null,
    indices: null,  // 连成一行的五个棋子的索引
  }
  // let latestLayout = history[history.length - 1].layout
  // let chessColor = history[history.length - 1].next === 'black' ? 'white' : 'black'
  
  let allPermutations = [] // 已经下过的棋子中，刚刚下的这个颜色的棋子 的 向右、向下、向左下、向右下的所有排列组合 组成的数组
  for (let i = 0; i < currentLayout.length; i++) {
    for (let j = 0; j < currentLayout[i].length; j++) {
      if (currentLayout[i][j] === chessColor) {
        let permutations = getPermutationOfThisIndex(i, j)
        allPermutations = [...allPermutations, ...permutations]
      }
    }
  }
  
  let fiveInARowIndices = getFiveInARowIndices(currentLayout, allPermutations, chessColor)
  if (fiveInARowIndices.length === 5) {
    winnerObj = {
      winner: chessColor,
      indices: fiveInARowIndices
    }
  }
  
  return winnerObj
}

/**
 * 如果能找到五个在一行的，返回 五个在一行的索引；如果找不到，返回一个空数组
 * @param layout
 * @param allPermutations
 * @param chessColor
 * @returns {[]}
 */
export function getFiveInARowIndices (layout, allPermutations, chessColor) {
  let fiveInARowIndices = [] // 5个棋子在一行的索引
  for (let i = 0; i < allPermutations.length; i++) {
    let fiveInThisRow = true
    for (let j = 0; j < allPermutations[i].length; j++) {
      let [rowIndex, columnIndex] = allPermutations[i][j]
      if (layout[rowIndex][columnIndex] !== chessColor) {
        fiveInThisRow = false
        break
      }
    }
    if (fiveInThisRow) {
      fiveInARowIndices = allPermutations[i]
      break
    }
  }
  
  return fiveInARowIndices
}

/**
 * 返回 这个索引位置 的 向右、向下、向左下、向右下方向 可能的排列
 * @param rowIndex
 * @param columnIndex
 * @returns {[]}
 */
export function getPermutationOfThisIndex (rowIndex, columnIndex) {
  let permutations = [] // 这个索引位置 的 向右、向下、向左下、向右下方向 可能的排列
  
  // 如果向右5个位置 还在棋盘内的话，将这个组合推进去
  if (columnIndex + 4 <= 14) {
    let p = []
    for (let i = columnIndex; i <= columnIndex + 4; i++) {
      p.push([rowIndex, i])
    }
    permutations.push(p)
  }
  
  // 如果向下5个位置 还在棋盘内的话，将这个组合推进去
  if (rowIndex + 4 <= 14) {
    let p = []
    for (let i = rowIndex; i <= rowIndex + 4; i++) {
      p.push([i, columnIndex])
    }
    permutations.push(p)
  }
  
  // 如果向左下5个 位置 还在棋盘内的话，将这个组合推进去
  if (columnIndex - 4 >= 0 && rowIndex + 4 <= 14) {
    let p = []
    for (let i = 0; i <= 4; i++) {
      p.push([rowIndex + i, columnIndex - i])
    }
    permutations.push(p)
  }
  
  // 如果向右下5个位置 还在棋盘内的话，将这个组合推进去
  if (columnIndex + 4 <= 14 && rowIndex + 4 <= 14) {
    let p = []
    for (let i = 0; i <= 4; i++) {
      p.push([rowIndex + i, columnIndex + i])
    }
    permutations.push(p)
  }
  
  return permutations
}