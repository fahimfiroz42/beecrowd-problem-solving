
function checkName(str){
    if (typeof str !=='string'){
        return 'invalid'
    }
    let lastNum= str.split('')
    let lastNum1=lastNum.pop()

    let  goodName='aeiouyw'
    for(let item of goodName){
        if(item.includes(lastNum1)){
            return 'good name'
        }

    }

    return 'bad name'

    }
