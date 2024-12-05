const row = parseInt(prompt("Please enter the number of rows to generate a pyramid of numbers"))

for(let i = 1; i <= rows; i++) {
    row = ""
    for(let j = 1; j < i; j++) {
        row += j + " "
    }
    console.log(row)
}

//sine console.log takes a whole line so i solved this through gathering the whole row then printing it to the console