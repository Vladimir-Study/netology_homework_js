
function searchNumber(count_number) {
    numbers_array = []
    next:
    for (i = 2; ; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next
            }
        }
        numbers_array.push(i)
        if (numbers_array.length == count_number) {
            break 
        }
    }
    return numbers_array
}

let number = process.argv[2]
let result = searchNumber(number)
console.log(result)