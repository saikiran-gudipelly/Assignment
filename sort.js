const arr = [5, 2, 9, 1, 5, 6];

// Sorting in descending order
arr.sort(function(a, b) {
    return b - a;
});

console.log(arr);