const input = ["Bob", "Ross", "Guy", "Taco", "Waffles", "Ross", "Felix", "Felix", "Waffles"];

const input2 = ["Taco", "Taco", "Taco", "Felix", "Taco", "Burrito", "Pino"];

const dupeDetector = (input) => {
    let result = [];
    let hash = {};
    for (let i = 0; i < input.length; i++) {
        if(hash[input[i]] === undefined) {
            result.push(input[i]);
            hash[input[i]] = input[i];
        }
    }
    return result;
}