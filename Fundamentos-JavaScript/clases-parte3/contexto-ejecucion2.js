const userPoints = 150

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficinet points!"
        return message
    } else {
        const message = "Acces granted: Enjoy the premium features!"
        return message
    }
}

console.log(checkAccess())