function toCase(text) {
	if (text === "") {
    return "-";
  }

  // Convert text to lowercase and uppercase
  const lowercase = text.toLowerCase();
  const uppercase = text.toUpperCase();

  // Return the result with a hyphen between them
  return lowercase + '-' + uppercase;
  // write your code here
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
