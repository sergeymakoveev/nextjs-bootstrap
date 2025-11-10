// @ts-check

const { faker } = require('@faker-js/faker');

module.exports = () => {
  const data = {};
  data.authors = new Array(50).fill(0).map((_, id) => ({
    id,
    name: faker.person.fullName(),
  }));
  data.posts = new Array(500).fill(0).map((_, id) => ({
    id,
    title: faker.commerce.productName(),
    content: faker.lorem.lines({ min: 2, max: 4 }),
    authorId: faker.helpers.arrayElement(data.authors).id,
    date: faker.date.past().toISOString(),
    likeCount: faker.number.int({ min: 0, max: 100 }),
  }));
  data.comments = new Array(1000).fill(0).map((_, id) => ({
    id,
    content: faker.lorem.lines({ min: 2, max: 4 }),
    postId: faker.helpers.arrayElement(data.posts).id,
    authorId: faker.helpers.arrayElement(data.authors).id,
    date: faker.date.past().toISOString(),
    likeCount: faker.number.int({ min: 0, max: 100 }),
  }));
  return data;
};
