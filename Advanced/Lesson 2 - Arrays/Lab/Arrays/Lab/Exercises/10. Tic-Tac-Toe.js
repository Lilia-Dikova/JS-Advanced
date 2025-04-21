function solve (moves) {
    let field = 
   [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let mark = 'X';


        
    for (let i = 0; i < moves.length; i ++ ) {
        let [x,y] = moves[i].split(' ');
        if (i % 2 !== 0) {
            mark = 'Y';
        }

        field[x][y] == false ? field[x][y] = mark : `This place is already taken. Please choose another!`;
        debugger;
        console.log(field[x])
    }
}
solve (["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"])