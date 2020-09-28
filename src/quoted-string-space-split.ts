export type ParsedValue = {
	/**
	 * The type of the parsed group.
	 *
	 * - `plain` : The parsed group was split by spaces, but wasn't surrounded by quotes;
	 * - `single` : The parsed group was split by spaces, and was surrounded by single quotes (`'`);
	 * - `double` : The parsed group was split by spaces, and was surrounded by double quotes (`"`);
	 */
	type: 'plain' | 'single' | 'double';
	/**
	 * The text that this group contains (may contain spaces if the group was surrounded by quotes).
	 */
	value: string;
};

/**
 * This function splits spaces and creates an array of object defining both the type of group (based on quotes) and the value (text) of the group.
 * @param string The string to split.
 * @see splitSpacesExcludeQuotes
 */
export function splitSpacesExcludeQuotesDetailed(string: string): ParsedValue[] {
	const groupsRegex = /[^\s"']+|(?:"|'){2,}|"(?!")([^"]*)"|'(?!')([^']*)'|"|'/g;
	
	const matches: ParsedValue[] = [];
	
	let match;
	
	while ((match = groupsRegex.exec(string))) {
		if (match[2]) {
			// Single quoted group
			matches.push({type: 'single', value: match[2]});
		} else if (match[1]) {
			// Double quoted group
			matches.push({type: 'double', value: match[1]});
		} else {
			// No quote group present
			matches.push({type: 'plain', value: match[0]});
		}
	}
	
	return matches;
}

/**
 * This function splits spaces and creates an array of strings, like if you were to use `String.split(...)`, but without splitting the spaces in between quotes.
 * @param string The string to split.
 * @see splitSpacesExcludeQuotesDetailed
 */
export function splitSpacesExcludeQuotes(string: string): string[] {
	return splitSpacesExcludeQuotesDetailed(string).map(details => details.value);
}

export default splitSpacesExcludeQuotes;
