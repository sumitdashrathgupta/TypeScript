
function call(): void {
    setInterval((): void => {
        console.log(Math.floor(Math.random() * 9000 + 1000))
    }, 2000)
}

call()