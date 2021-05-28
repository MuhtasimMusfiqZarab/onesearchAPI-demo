/**
 * searchTextValidation Checks if the provided the search text is valid or just blank text
 * @param  searchText string
 * @return boolean
 */
export function isValidString(searchText: string): boolean {
  return !!(searchText && searchText.replace(/\s/g, '') !== '');
}
