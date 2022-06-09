import UserDataSourceAPI from '@/data/UserDataSourceAPI';
import { throwError } from '@vue/vue2-jest/lib/utils';
import UserAPIStub from './mocks/UserAPI';

function makeSut(options) {
  const api = new UserAPIStub(options);
  const sut = new UserDataSourceAPI(api);

  return { sut, api };
}

describe('UserDataSourceAPI', () => {
  it('should get correct default props', () => {
    const { sut } = makeSut();

    expect(sut.items).toEqual([]);
    expect(sut.first).toBe(5);
    expect(sut.loading).toBe(false);
    expect(sut.hasNextPage).toBe(true);
    expect(sut.endCursor).toBe('');
  });

  it('should get correct api instance', () => {
    const { sut, api } = makeSut();

    expect(sut.api).toEqual(api);
  });

  it('should search users', async () => {
    const options = { nodes: [{ username: 'valid_username' }] };
    const { sut, api } = makeSut(options);

    const spy = jest.spyOn(api, 'post');
    await sut.search('valid_value');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(sut.items).toHaveLength(1);
  });

  it('should call post api with correct params', async () => {
    const { sut, api } = makeSut();

    const spy = jest.spyOn(api, 'post');
    await sut.search('valid_value');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(api.path, api.data);
  });

  it('should search more items', async () => {
    const { sut, api } = makeSut();
    sut.items = [{ username: 'valid_username' }];

    const spy = jest.spyOn(sut, 'handleItems');
    await sut.search('valid_value', true);

    expect(spy).toHaveBeenCalledWith(api.post(), true);
    expect(sut.items).toHaveLength(3);
  });

  it('not have more items for search', async () => {
    const { sut, api } = makeSut();
    sut.hasNextPage = false;

    const spy = jest.spyOn(api, 'post');
    await sut.search('valid_value', true);

    expect(spy).not.toHaveBeenCalled();
    expect(sut.items).toHaveLength(0);
  });

  it('should call handlePagination with correct params', async () => {
    const options = { pageInfo: { endCursor: 'valid_cursor', hasNextPage: true } };
    const { sut, api } = makeSut(options);

    const spy = jest.spyOn(sut, 'handlePagination');
    await sut.search('valid_value');

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(api.post());
    expect(sut.endCursor).toBe(options.pageInfo.endCursor);
    expect(sut.hasNextPage).toBe(options.pageInfo.hasNextPage);
  });

  it('should throw an error', async () => {
    const { sut, api } = makeSut();

    const spy = jest.spyOn(api, 'post');
    spy.mockImplementation(() => throwError('valid_error_message'));

    await expect(sut.search()).rejects.toThrow('valid_error_message');
  });
});
