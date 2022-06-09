import * as Sentry from '@sentry/vue';
import { getUsers } from '@/graphql/query/users';

export default class UserDataSourceAPI {
  items = [];

  first = 5;

  loading = false;

  hasNextPage = true;

  endCursor = '';

  constructor(api) {
    this.api = api;
  }

  async search(search, isLoadingMore = false) {
    if (isLoadingMore && !this.hasNextPage) return this.items;

    const graphqlQuery = {
      query: getUsers,
      variables: {
        search,
        first: this.first,
        after: this.endCursor,
      },
    };

    try {
      this.loading = true;

      const response = await this.api.post('', graphqlQuery);
      await this.handleItems(response, isLoadingMore);
      await this.handlePagination(response);

      this.loading = false;

      return this.items;
    } catch (error) {
      this.loading = false;
      Sentry.captureException(error);
      throw new Error(error);
    }
  }

  async handleItems(response, isLoadingMore) {
    const items = [];
    const users = response.data.data.users.nodes;
    users.map((user) => items.push(user.username));

    if (isLoadingMore) this.items = [...this.items, ...items];
    if (!isLoadingMore) this.items = items;

    return this.items;
  }

  async handlePagination(response) {
    const { pageInfo } = response.data.data.users;
    this.endCursor = pageInfo.endCursor;
    this.hasNextPage = pageInfo.hasNextPage;
  }
}
