function password(obj){
    if(typeof obj !=='object'){
        return 'invalid'
    }
    let web=Object.values(obj)
    let birthYear=web[1]

    if(birthYear.length==4){
        console.log('invalid');
    }

    let web1=web[web.length-1]
    let web2=web1[0]
    let web3=web2.toUpperCase()+web1.slice(1)
    let username=web[0]

    let password=web3+'#'+username+'@'+birthYear

    console.log(password);

}