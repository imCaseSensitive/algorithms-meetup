Input:
[1, 4, 8], [3, 6, 7, 10]

Output: 6

Input:
[1, 1, 2, 2, 6], [4, 7, 7, 8]

Output: 4

const input1 = [1, 4, 8];
const input2 = [3, 6, 7, 10];
const input3 = [1, 1, 2, 2, 6];
const input4 = [4, 7, 7, 8];

const getMed = (arr1, arr2) => {
    const arr3 = arr1.concat(arr2).sort((a, b) => a - b);
    let median = 0;
    if (arr3.length % 2 > 0) {
        median = arr3[(arr3.length - 1) / 2];
    } else {
        median = (arr3[arr3.length / 2] + arr3[(arr3.length - 1) / 2]) / 2;
    }
    return median;
}

