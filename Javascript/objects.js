const student1 = {
    "name" : "John",
    "marks" : 12,
    "rank" : 3
}

const student2 = {
    "name" : "Greg",
    "marks" : 19,
    "rank" : 1
}

const student3 = {
    "name" : "Smith",
    "marks" : 15,
    "rank" : 2
}

const studentDetails = [student1, student2, student3]

studentDetails.sort()
// console.log(studentDetails)

// sort(function(a, b) {
//     return a - b
// })
// object.key

async function getData() {
    const resp = await fetch('./data.json')
    const data = await resp.json()
    console.log(data)
    const arr = []
    // iterating object - keyvalues
    for(const objectKey in data) {
        arr.push(data[objectKey])
    }
    arr.sort(function(a, b) {
        return a.rank - b.rank
    })
    console.log(arr)
}

getData()

// array -> index : 0, 1, 2, ...
// for(const index in studentDetails) {
//     console.log(studentDetails[index])
// }

