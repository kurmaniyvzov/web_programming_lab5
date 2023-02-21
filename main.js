function load() {
    let column_1 = [3, 4, 2, 5, 7, 1, 1, 1, 6, 1, 10, 2, 8, 7, 1, 9, 7, 6, 9, 7, 5, 3, 2, 5, 9, 3, 1, 2, 1, 8]
    let column_2 = [10, 6, 7, 1, 9, 1, 3, 1, 7, 7, 10, 7, 5, 4, 10, 4, 5, 5, 10, 5, 4, 4, 8, 8, 6, 10, 9, 1, 5, 5]
    let column_3 = [65, 96, 90, 99, 66, 86, 80, 73, 56, 81, 45, 69, 90, 51, 63, 52, 78, 83, 97, 96, 47, 88, 50, 69, 81, 54, 100, 94, 57, 56]
    let column_4 = [64, 52, 78, 55, 82, 96, 91, 63, 62, 87, 54, 57, 61, 69, 61, 89, 66, 78, 85, 99, 90, 42, 91, 73, 59, 92, 59, 96, 89, 55]

    let sum1 = 0
    for (let i = 0; i < column_1.length; i++) {
        sum1 += column_1[i]
    }

    let sum2 = 0
    for (let i = 0; i < column_2.length; i++) {
        sum2 += column_2[i]
    }

    let sum3 = 0
    for (let i = 0; i < column_3.length; i++) {
        sum3 += column_3[i]
    }

    let sum4 = 0
    for (let i = 0; i < column_4.length; i++) {
        sum4 += column_4[i]
    }

    let sum = [sum1, sum2, sum3, sum4]
    let total_sum = 0
    for (let i = 0; i< sum.length; i++){
        total_sum += sum[i]
    }

    const results = {
        col1: column_1,	
        col2: column_2,   	
        col3: column_3,	
        col4: column_4,	
        sums: sum, 	// array of sums of each column
        total_score: total_sum,	// computed total score
    }

    console.log(results)
}

load()