function call() {
    setInterval(function () {
        console.log(Math.floor(Math.random() * 9000 + 1000));
    }, 2000);
}
call();
