import { StateCreator } from 'zustand';
import { SearchHistoryStore } from 'store/search-history';
import { ApplicationStore } from 'store/types';

export const createSearchHistoryStore: StateCreator<
	ApplicationStore,
	[],
	[],
	SearchHistoryStore | null
> = (set): SearchHistoryStore => ({
	searchHistory: [],
	addSearchHistory: (search: string) =>
		set((state) => ({
			searchHistory: [search, ...state.searchHistory.slice(0, 5)],
		})),
});
