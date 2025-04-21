function solution(number){
     let m =  function(num){
        return number + num;

    }

    return m;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));


let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));