// Given a array of numbers representing the stock prices of a company in chronological order, 
//write a function that calculates the maximum profit you could have made from buying and selling that stock once.
//You must buy before you can sell it.

// For example, given[9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

maxProfit = arr => {
    let max = 0
    let profit

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            profit = arr[j] - arr[i]
            if (profit > max)
                max = profit
        }
    }
    console.log(max)
}


maxProfit([9, 11, 18, 8, 5, 7, 10])
