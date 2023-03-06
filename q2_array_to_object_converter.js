function convert(obj, key) {
    var newObj = {};
    obj.forEach(element => {
        newObj[element[key]] = element;
    });
    return newObj;
}

var newObj = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
console.log(newObj);