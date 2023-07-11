function areAnagrams(str1, str2) {
    // Convert strings to lowercase and remove non-alphabet characters
    str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
    str2 = str2.toLowerCase().replace(/[^a-z]/g, "");
  
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create character count objects for both strings
    var charCount1 = {};
    var charCount2 = {};
  
    // Populate character count objects
    for (var i = 0; i < str1.length; i++) {
      var char1 = str1[i];
      var char2 = str2[i];
  
      charCount1[char1] = charCount1[char1] ? charCount1[char1] + 1 : 1;
      charCount2[char2] = charCount2[char2] ? charCount2[char2] + 1 : 1;
    }
  
    // Compare character count objects
    for (var char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  var string1 = "listen";
  var string2 = "silent";
  console.log(areAnagrams(string1, string2)); // Output: true
  
  string1 = "hello";
  string2 = "world";
  console.log(areAnagrams(string1, string2)); // Output: false
  