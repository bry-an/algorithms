const arraySize = 40

let array = []

for (let index = 0; index < arraySize; index++) {
    const randomNumber = Math.round(Math.random() * arraySize)
    array.push(randomNumber)
}


swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex] = temp
}

selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
            var min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                min = j
        }
        if (i !== min)
            swap(array, i, min)
    }
    return array
}

console.log(selectionSort(array))

  