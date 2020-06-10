type ParsedValue = {
	type: 'plain' | 'single' | 'double';
	value: string;
};

export function splitSpacesExcludeQuotesDetailed(string: string): ParsedValue[] {
	const groupsRegex = /[^\s"']+|"(?!")([^"]*)"|'(?!')([^']*)'/g;
	
	const matches: ParsedValue[] = [];
	
	let match;
	
	while ((match = groupsRegex.exec(string))) {
		if (match[2]) {
			// Single quoted group
			matches.push({type: 'single', value: match[2]});
		} else if (match[1]) {
			// Double quoted group
			matches.push({type: 'double', value: match[1]});
		} else if (match[0]) {
			// No quote group present, but no undefined
			matches.push({type: 'plain', value: match[0]});
		}
	}
	
	return matches;
}

export function splitSpacesExcludeQuotes(string: string): string[] {
	return splitSpacesExcludeQuotesDetailed(string).map(details => details.value);
}

export default splitSpacesExcludeQuotes;
