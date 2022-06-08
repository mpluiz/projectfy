export default class UserAPIStub {
  path = '';

  data = '';

  constructor(options) {
    this.options = options;
  }

  post(path, data) {
    this.path = path;
    this.data = data;

    return {
      data: {
        data: {
          users: {
            pageInfo: {
              endCursor: 'valid_value',
              hasNextPage: true,
            },
            nodes: [
              { username: 'valid_username' },
              { username: 'another_valid_username' },
            ],
            ...this.options,
          },
        },
      },
    };
  }
}
