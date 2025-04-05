function add(numbers){
    if(numbers === ''){
        return 0;
    }
    if(numbers.length === 1){
        return parseInt(numbers);
    }
    if(numbers.includes(',')){
        let nums = numbers.split(',');
        return nums.reduce((sum, number) => sum + parseInt(number), 0);
    }
 
  
}

module.exports = add;