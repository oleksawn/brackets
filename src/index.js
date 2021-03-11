module.exports = function check(str, bracketsConfig){
  var str = str.split("");
  var arr = JSON.stringify(bracketsConfig).split("");
  function brackets(arr){
    var stack = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == "(" || arr[i] == "[" || arr[i] == "{"){
        stack.push(arr[i]);
      }
      else if(arr[i] == ")"){
        if(stack[stack.length -1] == "("){
          stack.pop();
        }
        else{
          return false;
        }
      }
      else if(arr[i] == "]"){
        if(stack[stack.length -1] == "["){
          stack.pop();
        }
        else{
          return false;
        }
      }
      else if(arr[i] == "}"){
        if(stack[stack.length -1] == "{"){
          stack.pop();
        }
        else{
          return false;
        }
      }
      else if(arr[i] == "|"){
        if(stack[stack.length -1] == "|"){
          stack.pop();
        }
        else{
          stack.push(arr[i]);
        }
      }
  }
        return stack;
  }
  return (brackets(str).length != 0 || brackets(arr).length != 0) ? false : true;
}