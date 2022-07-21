/**
 * Hàm random id dạng String
 * @param
 * @Author Hainh 21/07/2022
 *
 */
const ARRAY = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  '#',
  '@',
  '!',
]
const SIZE_ARRAY = ARRAY.length
const uuid = () => {
  let uuid = ''
  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(SIZE_ARRAY * Math.random())
    uuid += ARRAY[random_index]
  }
  return uuid
}

export default uuid
