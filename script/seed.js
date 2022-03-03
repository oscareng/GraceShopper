"use strict";

const {
  db,
  models: { User, Product, LineItem, Order },
} = require("../server/db");

const lineitems = [
  { name: "Shirt1", saleprice: 1 },
  { name: "Shirt1", saleprice: 1 },
  { name: "Shirt1", saleprice: 1 },
];
const orders = [{ totalprice: 1 }, { totalprice: 1 }, { totalprice: 1 }];
const products = [
  {
    name: "Shirt1",
    imageUrl:
      "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shirt2",
    imageUrl:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shirt3",
    imageUrl:
      "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shirt4",
    imageUrl:
      "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shirt5",
    imageUrl:
      "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Shirt6",
    imageUrl:
      "https://images.pexels.com/photos/8485725/pexels-photo-8485725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
    User.create({ username: "john", password: "123" }),
  ]);
  const productSeed = await Promise.all(
    products.map((product) => {
      return Product.create(product);
    })
  );

  const lineItemSeed = await Promise.all(
    lineitems.map((product) => {
      return LineItem.create(product);
    })
  );

  const OrderSeed = await Promise.all(
    orders.map((product) => {
      return Order.create(product);
    })
  );

  //Find cody and Shirt1 and associate them
  const cody = await User.findOne({ where: { username: "cody" } });
  const shirt = await Product.findOne({ where: { name: "Shirt1" } });
  const order = await Order.findOne({ where: { ordernumber: 1 } });
  const lineitem = await LineItem.findOne({ where: { name: "Shirt1" } });
  await cody.addOrder(order);
  await order.addLineItem(lineitem);
  await lineitem.addProduct(shirt);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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
