import { describe, expect, it } from 'vitest';
import { splitSpacesExcludeQuotes } from '../src/quoted-string-space-split';

describe('splitSpacesExcludeQuotes function', () => {
	describe('Basic valid strings', () => {
		it('should return empty array', () => {
			const content = '';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected: unknown[] = [];

			expect(result).toEqual(expected);
		});

		it('should return single element', () => {
			const content = 'test';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test'];

			expect(result).toEqual(expected);
		});

		it('should return two element', () => {
			const content = 'test1 test2';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1', 'test2'];

			expect(result).toEqual(expected);
		});

		it('should return three element', () => {
			const content = 'test1 test2 test3';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1', 'test2', 'test3'];

			expect(result).toEqual(expected);
		});

		it('should return an empty array on empty string', () => {
			const result: string[] = splitSpacesExcludeQuotes('');

			expect(result).toEqual([]);
		});
	});

	describe('Advanced valid strings', () => {
		it('should return single element spaced double-quote', () => {
			const content = '"test1 test2"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 test2'];

			expect(result).toEqual(expected);
		});

		it('should return single element spaced single-quote', () => {
			const content = "'test1 test2'";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 test2'];

			expect(result).toEqual(expected);
		});

		it('should return two (pre) element spaced double-quote', () => {
			const content = 'pretest "test1 test2"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['pretest', 'test1 test2'];

			expect(result).toEqual(expected);
		});

		it('should return two (pre) element spaced single-quote', () => {
			const content = "pretest 'test1 test2'";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['pretest', 'test1 test2'];

			expect(result).toEqual(expected);
		});

		it('should return two (post) element spaced double-quote', () => {
			const content = '"test1 test2" posttest';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 test2', 'posttest'];

			expect(result).toEqual(expected);
		});

		it('should return two (post) element spaced single-quote', () => {
			const content = "'test1 test2' posttest";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 test2', 'posttest'];

			expect(result).toEqual(expected);
		});

		it('should return three element spaced double-quote', () => {
			const content = 'pretest "test1 test2" posttest';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['pretest', 'test1 test2', 'posttest'];

			expect(result).toEqual(expected);
		});

		it('should return three element spaced single-quote', () => {
			const content = "pretest 'test1 test2' posttest";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['pretest', 'test1 test2', 'posttest'];

			expect(result).toEqual(expected);
		});
	});

	describe('Advanced inner quotes valid strings', () => {
		it('should return with one single quote in double-quoted', () => {
			const content = '"test1 \' test2"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ["test1 ' test2"];

			expect(result).toEqual(expected);
		});

		it('should return with one double quote in single-quoted', () => {
			const content = "'test1 \" test2'";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 " test2'];

			expect(result).toEqual(expected);
		});

		it('should return with two single quote in double-quoted', () => {
			const content = '"test1 \'\' test2"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ["test1 '' test2"];

			expect(result).toEqual(expected);
		});

		it('should return with two double quote in single-quoted', () => {
			const content = '\'test1 "" test2\'';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 "" test2'];

			expect(result).toEqual(expected);
		});

		it('should return with three single quote in double-quoted', () => {
			const content = "\"test1 ''' test2\"";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ["test1 ''' test2"];

			expect(result).toEqual(expected);
		});

		it('should return with three double quote in single-quoted', () => {
			const content = '\'test1 """ test2\'';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1 """ test2'];

			expect(result).toEqual(expected);
		});

		it('should return three elements from two groups double-quoted', () => {
			const content = '"test1" test2 "test3"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1', 'test2', 'test3'];

			expect(result).toEqual(expected);
		});

		it('should return three elements from two groups single-quoted', () => {
			const content = "'test1' test2 'test3'";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['test1', 'test2', 'test3'];

			expect(result).toEqual(expected);
		});
	});

	describe('Advanced inner quotes only valid strings', () => {
		it('should return with one raw single quote', () => {
			const content = "'";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ["'"];

			expect(result).toEqual(expected);
		});

		it('should return with one raw double quote', () => {
			const content = '"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['"'];

			expect(result).toEqual(expected);
		});

		it('should return with two raw single quote', () => {
			const content = "''";

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ["''"];

			expect(result).toEqual(expected);
		});

		it('should return with two raw double quote', () => {
			const content = '""';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['""'];

			expect(result).toEqual(expected);
		});

		it('should return with advanced raw quotes', () => {
			const content = '\'""\'\'""""';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['\'""\'\'""""'];

			expect(result).toEqual(expected);
		});
	});

	describe('Mixed quotes valid strings', () => {
		it('should return double then single', () => {
			const content = 'plain "test double" \'test single\'';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['plain', 'test double', 'test single'];

			expect(result).toEqual(expected);
		});

		it('should return single then double', () => {
			const content = 'plain \'test single\' "test double"';

			const result: string[] = splitSpacesExcludeQuotes(content);

			const expected = ['plain', 'test single', 'test double'];

			expect(result).toEqual(expected);
		});
	});
});
