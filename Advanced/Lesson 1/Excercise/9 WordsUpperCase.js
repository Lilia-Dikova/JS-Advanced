function solve(text) {

    let result = text.toUpperCase()
      .split(/[\W]+/)
      .filter(w => w.length > 0)
      .join(", ");
  
    console.log(result);
  }

solve(' double-check@,,,    :aaaminmi nins! 11222 "5 in JS ?');