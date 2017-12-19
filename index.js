
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
        let str = '' // SAVING THE NAMES IN ORDER HERE
        for(let i=0; i < katzDeliLine.length; i++){
            str += `${i+1}. ${katzDeliLine[i]}, `
        }
        str[str.length-2] = '' // REMOVE THE LAST COMMA FROM THE LAST NAME
        return `The line is currently: ${str}`
    }
}
