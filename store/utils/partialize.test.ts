import { ApplicationStore } from 'store/types';

import { partialize } from './partialize';

describe('partialize', () => {
	it('should partialize store and return only filters', () => {
		expect(
			partialize({ searchHistory: ['Search 1'] } as ApplicationStore)
		).toEqual({
			searchHistory: ['Search 1'],
		});
	});

	it('should return empty object filters are not exit', () => {
		expect(partialize({} as ApplicationStore)).toEqual({
			searchHistory: [],
		});
	});
});
