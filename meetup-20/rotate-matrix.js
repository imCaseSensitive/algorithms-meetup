const input = [
    [ 1, 2, 3, 4, 5 ],
    [ 6, 7, 8, 9, 10 ],
    [ 'A', 'B', 'C', 'D', 'E' ],
    [ 'F', 'G', 'H', 'I', 'J' ]
];

const output = [
    [ 'F', 'A', 6, 1 ],
    [ 'G', 'B', 7, 2 ],
    [ 'H', 'C', 8, 3 ],
    [ 'I', 'D', 9, 4 ],
    [ 'J', 'E', 10, 5 ]
];

const rotater = (matrix) => {
    const answer = []
    for (let i = 0; i < matrix[0].length; i++) {
        answer.push([])
        for (let j = matrix.length - 1; j >= 0; j--) {
            answer[i].push(matrix[j][i]);
        }
    }
    console.log(answer)
    return answer
}

rotater(input)

