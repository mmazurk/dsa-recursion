/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {

  if (idx === nums.length) return 1;                           
  return nums[idx] * product(nums, idx + 1);
}
        /** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0) {
  
  if (idx === words.length) return 0;
  return words[idx].length > longest(words, idx + 1) ? words[idx].length : longest(words, idx + 1)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {

  if(idx >= str.length) return "";
  return str[idx] + everyOther(str, idx + 2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  function reverse(str, idx = str.length - 1) {
    if (idx < 0) return "";
    return str[idx] + reverse(str, idx - 1);
  }

  const reversedString = reverse(str);
  return str === reversedString;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if(idx === arr.length) return -1
  return arr[idx] === val ? idx : findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.lenght - 1) {
  if (idx < 0) return "";
  return str[idx] + revString(str, idx - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

// given an object, return an array of all of the string values. */

function gatherStrings(object, arr = []) {
  for (let key of Object.keys(object)) {
    if (typeof object[key] === "object") {
      gatherStrings(object[key], arr);
    }
    if (typeof object[key] === "string") {
      arr.push(object[key]); 
    }
  } return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx === rightIdx && arr[leftIdx] === val) {
    return leftIdx;
  } else if (leftIdx === rightIdx && arr[leftIdx] !== val) {
    return -1;
  }

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (arr[middleIdx] === val) return middleIdx;
  else {
    return arr[middleIdx] < val
      ? binarySearch(arr, val, (leftIdx = middleIdx + 1))
      : binarySearch(arr, val, (rightIdx = middleIdx - 1));
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
