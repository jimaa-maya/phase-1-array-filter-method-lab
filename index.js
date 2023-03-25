
const findMatching =function(arr, expectedName) {
    return arr.filter(name => name.toLowerCase() === expectedName.toLowerCase())
};

const fuzzyMatch = function(arr, searchString) {
    return arr.filter(name => name.slice(0, searchString.length) ===searchString)
};


const matchName = function(arr, expectedName) {
    return arr.filter(item => item.name === expectedName)
};
