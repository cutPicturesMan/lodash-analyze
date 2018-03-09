let reduce = arrayReduce([1, 2, 3], function(total, now){
    console.log(total, now);
    return total + now;
}, 10);

console.log(reduce);