/**
 * input : [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 
 * Create a function getting the array parameter
 * To rotate the matrix to 90 degree
 * create an empty array 1
 * iterate 2 loops row loop and column loop
 * iterate the row loop starting from 0 till length of the array
 * create an empty array 2 to push the values
 * iterate the column loop starting from the length-1 upto 0
 * after iteration get the values as arr[column index][row index]
 * push the values to empty array 2
 * after the column loop iteration push the empty array 2 in empty array 1
 * return the empty array 1
 */

let arr = [[1,2,3],[4,5,6],[7,8,9]]

function RotateMatrix(arr){
let empty = []
len = arr.length-1
for (let i=0;i<arr.length;i++){
    let arrayValue = []
    for(let j=len;j>=0;j--){
        arrayValue.push(arr[j][i])    
    }
    empty.push(arrayValue)
}
return(empty)
}

console.log(RotateMAtrix(arr))
console.log(RotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
