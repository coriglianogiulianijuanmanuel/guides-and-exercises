const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("The string 'browserType' includes the substring 'zilla'");
} else {
  console.log(
    "The string 'browserType' does not include the substring 'zilla'"
  );
}

if (browserType.startsWith("zilla")) {
  console.log("The string 'browserType' starts with the substring 'zilla'");
} else {
  console.log(
    "The string 'browserType' does not start with the substring 'zilla'"
  );
}

if (browserType.endsWith("zilla")) {
  console.log("The string 'browserType' ends with the substring 'zilla'");
} else {
  console.log(
    "The string 'browserType' does not end with the substring 'zilla'"
  );
}
