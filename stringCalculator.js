function add(numbers){
    if(numbers === ''){
        return 0;
    }
    if(numbers.length === 1){
        return parseInt(numbers);
    }
    if(numbers.includes('\n') && numbers.includes('//')){
        let idx = numbers.indexOf('//');
        let delimiter = numbers[idx+2];
        numbers = numbers.replaceAll('/','');
        numbers = numbers.replaceAll('\n','');
        let nums = numbers.split(delimiter);
        nums = nums.filter(n => n);
        if(nums.some(num => num.includes('-'))){
            let s = ''
            for(let i = 0; i < nums.length; i++){
                if(nums[i].includes('-')){
                    s += nums[i]+',';
                }
            }
            throw new Error(`negative numbers not allowed ${s}`);
        }
        return nums.reduce((sum, number) => sum + parseInt(number), 0);
    }
    if(numbers.includes(',') && !numbers.includes('\n')){
        
        let nums = numbers.split(',');
        if(nums.some(num => num.includes('-'))){
            let s = ''
            for(let i = 0; i < nums.length; i++){
                if(nums[i].includes('-')){
                    s += nums[i]+',';
                }
            }
            throw new Error(`negative numbers not allowed ${s}`);
        }
        return nums.reduce((sum, number) => sum + parseInt(number), 0);
    }
    if(numbers.includes('\n') && numbers.includes(',')){
        let nums = numbers.replaceAll('\n',',');
        let nums2 = nums.split(',');
        if(nums2.some(num => num.includes('-'))){
            let s = ''
            for(let i = 0; i < nums2.length; i++){
                if(nums2[i].includes('-')){
                    s += nums2[i]+',';
                }
            }
            throw new Error(`negative numbers not allowed ${s}`);
        }
        return nums2.reduce((sum, number) => sum + parseInt(number), 0);
    }
    
  
}

module.exports = add;