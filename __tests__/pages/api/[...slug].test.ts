import { createMocks } from 'node-mocks-http';
import { data } from '../../../pages/api/data';
import handler, { error404 } from '../../../pages/api/[...slug]';

test('returns data if passed existing path', async () => {
  const path1 = 'destination'
  const path2 = 'moon'
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      slug: [path1, path2],
    },
  });
  await handler(req, res);
  expect(res._getStatusCode()).toBe(200);
  expect(JSON.parse(res._getData())).toEqual(data[path1][path2]);
})

test('returns data list if passed only path1', async () => {
  const path1 = 'destination'
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      slug: [path1],
    },
  });
  await handler(req, res);
  expect(res._getStatusCode()).toBe(200);
  expect(JSON.parse(res._getData())).toEqual(Object.values(data[path1]));
})

test('returns 404 error if passed non-existing path', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      slug: ['destinations', 'moon'],
    },
  });
  await handler(req, res);
  expect(res._getStatusCode()).toBe(404);
  expect(JSON.parse(res._getData())).toEqual(error404);
})