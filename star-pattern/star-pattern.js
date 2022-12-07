/**
 * Create a function with an input parameter
 * create a blank string
 * iterate 2 loops the first loop for row and the second loop for column
 * row loop will loop startig from the index 0 to the input value
 * column loop will start looping from the row index and ends upto the input value
 * afer row loop the create a empty string
 * add star with the empty string in the column loop
 * add the empty string and new line character with blank string
 * return the blank string
 */



function starPattern(input){
    let blankString = ""    
    for(let i=0;i<input;i++){
        let emptyString = ""
        for(let j = i;j<input;j++){
            emptyString+="*"
        }
        blankString = blankString+emptyString+ "\n"

    }
    return blankString

}
console.log(starPattern(10))