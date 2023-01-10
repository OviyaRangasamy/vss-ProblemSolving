let str = "leetcode";
let data = ["leet", "code"];

function word_break(str, data) {
  for (let i of data) {
    str = str.replaceAll(i, "");
  }
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log(word_break("leetcode",  ["leet", "code"]));
console.log(word_break("applepenapple", ["apple", "pen"]));
console.log(word_break("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(word_break("cars",["car","ca","rs"]))