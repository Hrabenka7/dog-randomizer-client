export function capitalize(string) {
  var firstLetterCapitalized = string.charAt(0).toUpperCase();
  var restOfString = string.slice(1)

  return firstLetterCapitalized + restOfString ;
}