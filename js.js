function reorder() {
    var obj = $('.center a');
    var count = obj.length;
    
    for(var i=1; i<=count; i++) {
    itA = $('.center a:nth-child('+i+')');
    
    rnd = rmax(count);
    if(rnd==i) continue;
    
    itB = $('.center a:nth-child('+rnd+')');
    
    var itAC = itA.clone(true);
    var itBC = itB.clone(true);
    
    itBC.insertAfter(itA);
    itA.remove();
    
    itAC.insertAfter(itB);
    itB.remove();
    }
    }
    
    function rmax(max){
    var n = Math.round(Math.random()*max);
    return n == 0 ? 1 : n;
    }