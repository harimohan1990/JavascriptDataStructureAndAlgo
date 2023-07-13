function containsSubstring(string, substring) {
    for (let i = 0; i <= string.length - substring.length; i++) {
      let match = true;
      for (let j = 0; j < substring.length; j++) {
        if (string[i + j] !== substring[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return true;
      }
    }
    return false;
  }

  const str = "Hello, world!";
  const sub = "world";
  const contains = containsSubstring(str, sub);
  console.log(contains);

  