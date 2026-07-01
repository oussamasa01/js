function getAcceleration (objec){
if (objec.f !==undefined && objec.m !==undefined){
    return objec.f / objec.m
}else if 
(objec.Δv !==undefined && objec.Δt !==undefined ){
    return objec.Δv / objec.Δt
}else if ( objec.d !==undefined && objec.t !==undefined){
    return(   objec.d * 2 )/ (objec.t **2)
}else {
    return "impossible"
} 
}

