module.exports = function check(str, bracketsConfig){
  var arr = str.split("");
    var stack = [];
    
    for(var i = 0; i < arr.length; i++){
        var flag = false;
        for(var j = 0; j < bracketsConfig.length; j++){
            if(arr[i] == bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]){
                stack.push(arr[i]);
                flag = true;
            }
        }
        
        if(flag == false){
            for(var j = 0; j < bracketsConfig.length; j++){
                if(arr[i] == bracketsConfig[j][1]){
                    if(stack[stack.length -1] == bracketsConfig[j][0]){
                        stack.pop();
                    }
                    else if(bracketsConfig[j][0] == bracketsConfig[j][1]){
                        stack.push(arr[i]);
                    }
                    else{
                        return false;
                    }
                }
            }
        }
    }
    return (stack.length != 0) ? false : true;
}