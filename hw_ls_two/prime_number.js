
function searchNumber(count_number) {
    numbers_array = []
    next:
    for (i = 2; i <=count_number; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                continue next
            }
        }
        numbers_array.push(i)
    }
    return numbers_array
}

let number = process.argv[2]
let result = searchNumber(number)
console.log(result)