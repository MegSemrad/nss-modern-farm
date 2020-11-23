const plantsInField = []

export const addPlant = (seedObject) => {
    
    if(Array.isArray(seedObject)) {
        plantsInField.push(seedObject[0])
        plantsInField.push(seedObject[1])
    }
    else {plantsInField.push(seedObject)}
}


export const usePlants = () => {
   return plantsInField.slice() 
}


// What is this...
function func() {
    document.write(Array.isArray(plantsInField))
}