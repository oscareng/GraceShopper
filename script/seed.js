'use strict';

const {
  db,
  models: { User, Product, LineItem, Order },
} = require('../server/db');

const { faker } = require('@faker-js/faker');
const { transformIncludesAndExcludes } = require('@babel/preset-env');

// const products = [
//   {
//     name: 'Light blue shirt',
//     description: 'A nice piece of clothing!',
//     price: 50,
//     gender: 'Male',
//     size: 'Medium',
//     category: 'Shirt',
//     stock: 1,
//     imageUrl: 'Light_blue_shirt.jpeg',
//   },
//   {
//     name: 'Black blazer',
//     description:
//       'The latest trend, no matter who you are, where you’re from and what you’re up to',
//     price: 60,
//     gender: 'Female',
//     size: 'Medium',
//     category: 'Blazer',
//     stock: 1,
//     imageUrl: 'black_blazer.jpeg',
//   },
//   ,
//   {
//     name: 'Black hat',
//     description:
//       'Hats are the excellent accessory that will complete any outfit',
//     price: 20,
//     gender: 'Male',
//     size: 'Medium',
//     category: 'Shirt',
//     stock: 1,
//     imageUrl: 'Black_hat.jpeg',
//   },
//   {
//     name: 'Green sweater',
//     description: 'Combine innovative design and vintage style',
//     price: 50,
//     gender: 'Female',
//     size: 'Small',
//     category: 'Sweater',
//     stock: 1,
//     imageUrl: 'Green_sweater.jpeg',
//   },
//   {
//     name: 'Gray Sweatshirt',
//     description: 'Innovative sportswear',
//     price: 60,
//     gender: 'Male',
//     size: 'Large',
//     category: 'Sweatshirt',
//     stock: 1,
//     imageUrl: 'Gray_jogging_cloth.jpeg',
//   },
//   {
//     name: 'Brown cap',
//     description: 'Keep warm',
//     price: 20,
//     gender: 'Female',
//     size: 'Small',
//     category: 'Sweater',
//     stock: 1,
//     imageUrl: 'Brown_cap.jpeg',
//   },
// ];

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  // create users
  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push(
      await User.create({
        username: faker.internet.userName(),
        password: faker.internet.password(),
      })
    );
  }
  //create products
  const products = [];
  for (let i = 0; i < 50; i++) {
    products.push(
      await Product.create({
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(20, 99, 0),
        gender: faker.name.gender(transformIncludesAndExcludes),
        size: faker.lorem.word(),
        category: faker.commerce.department(),
        stock: 999,
        imageUrl: faker.image.fashion(640, 480, true),
      })
    );
  }
  //create Line Items
  const lineitems = [];
  for (let i = 0; i < 50; i++) {
    lineitems.push(
      await LineItem.create({
        name: faker.lorem.sentence(),
        price: faker.commerce.price(20, 99, 0),
        size: faker.lorem.word(),
        quantity: 9,
      })
    );
  }

  //create Orders
  const orders = [];
  for (let i = 0; i < 50; i++) {
    orders.push(
      await Order.create({
        ordernumber: 1, // may need to check with team about this
        totalprice: faker.commerce.price(20, 99, 0),
      })
    );
  }
}

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
//
// async function seed() {
//   await db.sync({ force: true }); // clears db and matches models to tables
//   console.log('db synced!');

//   const lineItemSeed = await Promise.all(
//     lineitems.map((product) => {
//       return LineItem.create(product);
//     })
//   );

//   const OrderSeed = await Promise.all(
//     orders.map((product) => {
//       return Order.create(product);
//     })
//   );

//   //Find cody and Shirt1 and associate them
//   const cody = await User.findOne({ where: { username: 'cody' } });
//   const shirt = await Product.findOne({ where: { name: 'Shirt1' } });
//   const order = await Order.findOne({ where: { ordernumber: 1 } });
//   const lineitem = await LineItem.findOne({ where: { name: 'Shirt1' } });
//   await cody.addOrder(order);
//   await order.addLineItem(lineitem);
//   await lineitem.addProduct(shirt);
//   console.log(`seeded ${users.length} users`);
//   console.log(`seeded successfully`);
//   return {
//     users: {
//       cody: users[0],
//       murphy: users[1],
//     },
//   };
// }

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
