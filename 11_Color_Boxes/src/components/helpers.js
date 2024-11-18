//Return a random item from the list

function choise(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

export { choise };