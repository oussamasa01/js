function multiply(a, b) {
    let res = 0;
    for (let i = 0; i < b; i++) {
        res += a;
    }
    return res;
}
function divide(a, b) {
    let c =0;
    while (a >=b){
        a-=b;
        c++;
       
    }
  return c ;


}
function modulo (a,b ){
   
    while (a>=b){
        a-=b;
    }
    return a;
}