import movies from "../itemCounter.js";

const array1 = ['b', 'e', 'n', 'j', 'a', 'm', 'i', 'n'];
const array2 = ['p', 'e', 't', 'e', 'r'];
const array3 = array1.concat(array2)
describe('Number of movies test', () => {
  test('Number of movies', () => {
    expect(movies(array1)).toBe(8);
  });
  test('Number of movies', () => {
    expect(movies(array2)).toBe(5);
  });
  test('Number of movies', () => {
    expect(movies(array3)).toBe(13);
  });
});