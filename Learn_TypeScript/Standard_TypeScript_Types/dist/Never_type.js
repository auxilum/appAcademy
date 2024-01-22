var keepLogging = function (message) {
    while (true) {
        console.log(message);
    }
};
function neverReached(never) { }
function doSomeAction(status) {
    switch (status) {
        case "Pending":
            // some code
            break;
        case "Working":
            // some code
            break;
        case "Complete":
            // some code
            break;
        case "Canceled":
            // some code
            break;
        default:
            neverReached(status);
    }
}
doSomeAction("Pending");
