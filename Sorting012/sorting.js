/**
 * create a function with the array parameter
 * create an empty array for 0s
 * create an empty array for 1s
 * create an empty array for 2s
 * iterate the input array
 * if value= 0 push it to the 0s array
 * if value= 1 push it to the 1s array
 * if value = 2 push it to the 2s array
 * after the iteration completed merge the arrays in order of 0,1,2
 * return the merged array
 */

function SortArray(arr){
    let val0 = []
    let val1 = []
    let val2 = []
    for (let i of arr){
        if(i === 0){
            val0.push(i)
        }
        else if(i=== 1){
            val1.push(i)
        }
        else{
            val2.push(i)
        }
    }
    let finalArray = [...val0,...val1,...val2]
    return finalArray
}

console.log(SortArray([1,2,1,1,1,0,0,0,1,2]))
console.log(SortArray([1,0,1]))
console.log(SortArray([2,0,1,2]))

