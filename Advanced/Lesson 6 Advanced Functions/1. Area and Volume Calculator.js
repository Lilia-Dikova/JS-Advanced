function solve(areaFn, volFn, input) {

    const data = JSON.parse(input);

    const result = data.map(fig => ({
        area: areaFn.call(fig),
        volume: volFn.call(fig)
    }));
    console.log(result);
    }

    for (const iterator of object) {
        
    }

        const data1 = `[ 
            {"x":"1","y":"2","z":"10"},
            {"x":"7","y":"7","z":"10"},
            {"x":"5","y":"2","z":"10"} 
        ]`;


        function vol() {
            return Math.abs(this.x * this.y * this.z);
            };
        
        function area() {
            return Math.abs(this.x * this.y);
            };