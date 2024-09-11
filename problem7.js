function calculateMoney(ticketSell){
    if (ticketSell<0){
        return 'Invalid Number'
    }
    let ticketPrice=120
    let salaryOfDarowan=500
    let salaryOfStaf=50

    let totalSalaryOfStaf=salaryOfStaf*8
    const totalSpending=salaryOfDarowan + totalSalaryOfStaf
    let totalIncome=ticketSell*ticketPrice
    let restIncome=totalIncome-totalSpending
    return restIncome

}