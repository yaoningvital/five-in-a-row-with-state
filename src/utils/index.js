/**
 * 生成初始的layout
 * @returns {[]}
 */
// export function getInitialLayout () {
//   let initialLayout = []
//   for (let i = 0; i < 15; i++) {
//     let rowArray = []
//     for (let j = 0; j < 15; j++) {
//       rowArray.push(null)
//     }
//     initialLayout.push(rowArray)
//   }
//
//   return initialLayout
// }

export function getInitialLayout () {
  return [
    [null, null, null, null, null, 'white', 'black', 'black', 'black', 'white', 'black', 'black', null, null, null,],
    [null, null, null, null, null, 'black', 'white', 'black', 'white', 'black', null, 'black', null, null, null,],
    [null, null, null, null, null, 'white', 'white', 'white', 'black', 'white', null, 'white', 'black', null, null,],
    [null, null, null, null, null, 'black', 'black', null, 'white', 'black', 'black', 'black', 'black', null, null,],
    [null, null, null, null, null, 'black', 'white', 'black', 'black', 'black', 'black', 'white', 'black', null, null,],
    [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
    [null, null, null, null, null, 'white', 'white', null, 'black', 'white', 'black', 'white', null, null, null,],
    [null, null, null, null, null, 'white', 'black', 'black', 'black', 'white', 'black', 'black', null, null, null,],
    [null, null, null, null, null, 'black', 'white', 'black', 'white', 'black', null, 'black', null, null, null,],
    [null, null, null, null, null, 'white', 'white', 'white', 'black', 'white', null, 'white', 'black', null, null,],
    [null, null, null, null, null, 'black', 'black', null, 'white', 'black', 'black', 'black', 'black', null, null,],
    [null, null, null, null, null, 'black', 'white', 'black', 'black', 'black', 'black', 'white', 'black', null, null,],
    [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
    [null, null, null, null, null, 'white', 'white', null, 'black', 'white', 'black', 'white', null, null, null,],
    [null, null, null, null, null, 'white', 'black', null, 'white', 'black', null, 'white', null, null, null,],
  ]
}