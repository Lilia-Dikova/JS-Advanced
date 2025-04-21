function solve (arr) {
    return arr
    .sort((a,b) => a.length - b.length || a.localeCompare(b))
    .join('\n')
} 

console.log(solve(['alpha',

'beta',

'gamma']));

function sortArray(input) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}

sortArray(['alpha',

'beta',

'gamma'])