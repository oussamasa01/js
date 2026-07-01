function multiply(a, b) {
    let res = 0;
    let sign = 1
    if (a < 0 ){
        sign =-sign
        a = -a
    }
     if (b < 0 ){
        sign =-sign
        b = -b
    }
    
    for (let i = 0; i < b; i++) {
        res += a;
    }
    if (sign < 0 ){
        return -res
    }
    return res;
}
function divide(a, b) {
    let c =0;
    let sign = 1
      if (a < 0 ){
        sign =-sign
        a = -a
    }
     if (b < 0 ){
        sign =-sign
        b = -b
    }

    while (a >=b){
        a-=b;
        c++;
       
    }
     if (sign < 0 ){
        return -c
    }
  return c ;
}
function modulo (a,b ){
    let sign = 1
   if (a < 0 ){
        sign =-1
        a = -a
    }
     if (b < 0 ){
        
        b = -b
    }

    while (a>=b){
        a-=b;
    }
     if (sign < 0 ){
        return -a
    }
    return a;
}