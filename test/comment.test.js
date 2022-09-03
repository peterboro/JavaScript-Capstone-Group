import { getCounter } from '../src/modules/comments.js';

describe('Testing comment counter', () => {
  const commentArr = [
    {
      id: 1,
      name: 'Peter',
      comment: 'Good Movie',
    },
    {
      id: 2,
      username: 'Benjamin',
      comment: 'Great Movie',
    },
  ];
  const counter = getCounter(commentArr);
  expect(counter).toBe(2);
});

test('Testing the number of comments is 2', () => {
  const arr = ['Nice movie', 'Scary movie'];
  const counter = getCounter(arr);
  expect(counter).toBe(2);
});