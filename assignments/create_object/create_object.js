function CreateObject(arr) {
    // Write your code here
    var dict={}
    for (var i=0; i<arr.length; i+=2) {
        dict[arr[i]] = arr[i+1]
    }
    return dict
}

module.exports = CreateObject;
