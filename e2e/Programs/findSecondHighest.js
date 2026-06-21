function findSecondHighest(arr) {
    // Return null if there are fewer than 2 elements
    if (arr.length < 2) {
        return null;
    }

    // Initialize tracking variables to the lowest possible value
    let highest = -Infinity;
    let secondHighest = -Infinity;

    // Loop through the array tracking values manually
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (current > highest) {
            // Update second highest before changing highest
            secondHighest = highest;
            highest = current;
        } else if (current > secondHighest && current < highest) {
            // Update second highest only if it is smaller than the maximum
            secondHighest = current;
        }
    }

    // Return null if a distinct second highest doesn't exist
    return secondHighest === -Infinity ? null : secondHighest;
}

// Test with your series
const series = [5, 9, 9, 9, 6, 6, 4, 0, 0];
console.log(findSecondHighest(series)); // Output: 6