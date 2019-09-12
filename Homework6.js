/*1. Given a sorted array and an element from that array. Find the index of that
element using binary search. */
function getIndex(memberArr, arr = [], firstIndex = 0, lastIndex = arr.length) {
    let midIndex = Math.floor((firstIndex + lastIndex) / 2);
    if(memberArr === arr[midIndex]) {
        return midIndex;
    } else if(memberArr < arr[midIndex]) {
        return getIndex(memberArr, arr, firstIndex, midIndex - 1);
    } else {
        return getIndex(memberArr,arr, midIndex + 1, lastIndex);
    }
}
    console.log(getIndex(7,[7, 9, 10, 12, 14, 15] ));
    console.log(getIndex(9,[7, 9, 10, 12, 14, 15]));
    console.log(getIndex(10,[7, 9, 10, 12, 14, 15]));
    console.log(getIndex(12,[7, 9, 10, 12, 14, 15]));
    console.log(getIndex(14,[7, 9, 10, 12, 14, 15]));
    console.log(getIndex(15,[7, 9, 10, 12, 14, 15]));
    
