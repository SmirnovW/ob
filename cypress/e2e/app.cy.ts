import { SEARCH_INPUT_TEST_ID } from 'components/search/constants';
import { REPOSITORY_CARD_CONTAINER_TEST_ID } from 'components/repository-card/constants';
import { AUTOSUGGESTION_ITEM_TEST_ID } from 'components/autosuggestion/constants';
import { REPOSITORIES_URL, API_URL } from 'constants/api';

describe('categories tree', () => {
	it('should check search a repository', () => {
		cy.intercept({
			pathname: `${API_URL}${REPOSITORIES_URL}`,
			query: {
				q: 'React',
			},
		}).as('getRepositories');

		cy.visit('http://localhost:3000/');
		const inputControl = cy.get(`[data-testid="${SEARCH_INPUT_TEST_ID}"]`);

		inputControl.click();
		inputControl.type('React').type('{Enter}');
		cy.wait('@getRepositories')
			.its('response.statusCode')
			.should('eq', 200);
		cy.wait(1000);
		cy.get(`[data-testid="${REPOSITORY_CARD_CONTAINER_TEST_ID}"]`).each(
			(element) => {
				cy.wrap(element).should('exist');
			}
		);
		inputControl.click();
		cy.wait(1000);
		const autosuggestionItem = cy.get(
			`[data-testid="${AUTOSUGGESTION_ITEM_TEST_ID}0"]`
		);
		autosuggestionItem.click();
		cy.wait('@getRepositories')
			.its('response.statusCode')
			.should('eq', 200);
		cy.get(`[data-testid="${REPOSITORY_CARD_CONTAINER_TEST_ID}"]`).each(
			(element) => {
				cy.wrap(element).should('exist');
			}
		);
	});
});
