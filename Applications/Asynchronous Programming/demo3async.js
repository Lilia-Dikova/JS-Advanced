start ();
async function start() {
    console.log('Hello');

    const p = new Promise(executor);
    const result = await p;

    console.log(`Result: ${result}`)

    function executor(resolve, reject) {
        console.log('executing')

       setTimeout(resolve, 1000, 'Bye!')

    }
    console.log('there');
}