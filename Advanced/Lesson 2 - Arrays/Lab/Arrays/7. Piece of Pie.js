function solve (pies, startFlavor, endFlavor) {

    const start = pies.indexOf(startFlavor);

    const end = pies.indexOf(endFlavor) + 1;

    const result = pies.slice(start, end);

    return result;
    }

console.log(solve(['Pumpkn Pie',

'Key LimedPie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'))