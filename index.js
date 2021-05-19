const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   const newOb =  Object.assign({
        [key]: value 
    }, driver)
    return newOb
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newOb = Object.assign({}, driver)
    delete newOb[key] 
    return newOb   
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key] 
    return driver
}
