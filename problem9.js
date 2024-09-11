function deleteInvalid(array){
    
    let indexNaN=array.indexOf(NaN)
    console.log(indexNaN);

    let newArray=[]

    for(let item of array){
        if(typeof item =='number'){

            newArray.push(item)
        }
    }
    console.log(newArray);

}