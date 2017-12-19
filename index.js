
var katzDeli = []

function takeANumber(katzDeliLine, person){
    katzDeliLine.push(person)
    return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine){

    if (katzDeliLine.length == 0){   // IF NO ONE IS IN THE LINE
        return 'There is nobody waiting to be served!'
    }
    else{
        let current_person = katzDeliLine[0]
        katzDeliLine.shift()
        return `Currently serving ${current_person}.`
    }
}
