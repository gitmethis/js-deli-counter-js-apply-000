
var katzDeli = []

function takeANumber(katzDeliLine, person){
    katzDeliLine.push(person)
    return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){  
    // IF NO ONE IS IN THE LINE
    if (katzDeliLine.length == 0){ 
        return 'There is nobody waiting to be served!'
    }
    else{
        let current_person = katzDeliLine[0]
        katzDeliLine.shift()
        return `Currently serving ${current_person}.`
    }
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length == 0){ 
        return 'The line is currently empty.'
    }
    else{
            
    }
}