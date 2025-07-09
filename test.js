const array = []
for(let i = 0 ; i < 1000000; i++){
    array.push({id:i,name:i})
}

console.time('slice')
const arr2 = array.slice(0)
console.timeEnd('slice')

console.time('filter')
const arr3 = array.filter((ele)=> true)
console.timeEnd('filter')
