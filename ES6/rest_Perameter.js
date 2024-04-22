// ********** Rest Parameters (it is  a replacement of argument keyword)
// it like collect values and put them into array,thats why it will fully workable as array
// we write it during function define
// if in the case of rest Parameter is empty then it will be empty array
// it look like spread operator but it different (spread use spread values)(it use collect values)

const numbers = [1, 2, 3, 4, 5, 6]

// function add(...nums) {
//   let sum = 0
//   console.log('nums:', nums)
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//   return sum
// }

// sum by reduce
function add(...nums) {
  return nums.reduce((ar, num) => ar + num)
}

const result = add(...numbers) //it calculate sum of num array
