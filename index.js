// code your solution here
const record = []
function superbowlWin(record) {
    for(let win of record){
        if (win.result === 'W'){
            return win.year
        }
    }
}

superbowlWin(record)