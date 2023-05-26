import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createRepositoriesStore } from 'store/repositories';
import { ApplicationStore } from 'store/types';
import { partialize } from 'store/utils';
import { createSearchHistoryStore } from 'store/search-history';

export const useStore = create<ApplicationStore>()(
	persist(
		(...a) => ({
			...createRepositoriesStore(...a),
			...createSearchHistoryStore(...a),
		}),
		{
			name: 'history-storage',
			partialize,
		}
	)
);
