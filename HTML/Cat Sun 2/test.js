const list = [1,2,3,4,5,6,7,8,9,10]
const result = list
    .filter((n) =>  n % 2 == 1)
    .map((n) =>  n * n )
    .reduce((i,j) => i + j)

console.log(result)