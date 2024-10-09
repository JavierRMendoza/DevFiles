const globalVariable = '🙂'

function localOne() {
    console.log('GLOBAL 1: ', globalVariable)
    //console.log('LOCAL 1: ', localVariable)

    function localTwo() {
        const carrot = '🥕'
        console.log('LOCAL 2: ', carrot)
    }

    function localThreee() {
        console.log('LOCAL 3: ', carrot)
    }

    localTwo()
    localThreee()
}

console.log(localOne())
