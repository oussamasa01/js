const escapeStr =  "`\\/ \" '  ";
const arr = [4 , '2'];
const obj = {
    str : "oussama" , 
    num : 2026 ,
    bool : false ,
    undef : undefined,
}

const nested = {
    arr ,
    obj
};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);