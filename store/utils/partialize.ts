import { ApplicationStore } from 'store/types';

export const partialize = (
	store: ApplicationStore
): Partial<ApplicationStore> => {
	return { searchHistory: store?.searchHistory || [] };
};
