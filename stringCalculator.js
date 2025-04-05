function add(numbers){
    if(numbers === ''){
        return 0;
    }
    if(numbers.length === 1){
        return parseInt(numbers);
    }
    if(numbers.includes(',') && !numbers.includes('\n')){
        let nums = numbers.split(',');
        return nums.reduce((sum, number) => sum + parseInt(number), 0);
    }
    if(numbers.includes('\n') && numbers.includes(',')){
        let nums = numbers.replaceAll('\n',',');
        let nums2 = nums.split(',');
        return nums2.reduce((sum, number) => sum + parseInt(number), 0);
    }
    
  
}

module.exports = add;