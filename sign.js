function sign (num){
    if (num > 0){
        return 1
    }else if (num < 0){
        return -1
    }else{
        return 0
    }
}

function sameSign (num , num1){
    return sign(num) === sign(num1)
    

}


