const countInversions = arr => {
    let invCount = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j<arr.length; j++) {
            if (arr[i] > arr[j])
            invCount++
        }
    }
    console.log(invCount)
}

countInversions([5, 4, 3, 2, 1])