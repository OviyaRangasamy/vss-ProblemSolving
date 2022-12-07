function starPattern(input){
    
    for(let i=0;i<input;i++){
        let emptyString = ""
        for(let j = i;j<input;j++){
            emptyString+="*"
        }
        console.log(emptyString)

    }
}
console.log(starPattern(10))