export interface SearchHistoryStore {
	searchHistory: string[];
	addSearchHistory: (search: string) => void;
}
