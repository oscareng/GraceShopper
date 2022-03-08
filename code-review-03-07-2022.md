# Code Review 03-07-2022

## Authentication

### Sign-up and Login

- I can click the sign-up button with the fields empty and it doesn't tell me that username or password is required, in fact it creates a user in the database with an empty name and password.
- I can then login to that user with an empty username and password
- After signing up or logging in, I'm not given much indication I've logged in, this should redirect to the home page or somewhere useful.
- Why does the Owl logo take me to the login page?

## Products

- You've duplicated MenProducts and WomenProducts as whole components. Think about how you could just change the DATA and use a single component.
- In particular you are returning all products, and then filtering them in the components. You probably should pass along your category to the backend and only return the products necessary to render a particular page.

## Cart

### Adding items to cart

- Adding an item to the cart that already exists in the cart, causes an DB Error because it's not trying to update the quantity instead of just adding the item to the cart. If a lineitem containing a product already exists, it should update quantity first. This can be checked on the backend and logic can be added to do the right thing.

## Viewing cart

- Images aren't loading on the cart page, this looks because it's not including product data.
- The lineItem model has a name attribute, but it most likely needs to just use the product name. There's a relationship between products and line items you should be able to include the product info when fetching the line items and use that data in the component.
- Why are there two CartReducers? Remove the redundant one, it will just cause confusion.
- Think about the relationship between LineItems and Products.
  - You currently have:
    - LineItem.hasMany(Product);
    - Product.belongsTo(LineItem);
- Instead of display Hello loyal customer, you can display the user's name.
- You can easily calculate a total in the cart and display it.
- Still need to display the quantity ui and wire it up to a route to adjust the quantity of a cart item
- Need to add the ability to remove an item from the cart.
- I believe this is showing ALL users' carts when I navigate to it (not filtering on user)

## Checkout

- Don't see this yet, I'm assuming it's because you haven't gotten cart working yet.
- You don't have the state of the order implemented yet.

## Styling

- The styles look clean and good, I would look into flex-wrap to make your products wrap when the window size get smaller (this will go a long way towards making your site responsive)
- Perhaps style the GraceNYC text is a fancier/larger font so it becomes obvious it's the title and brand of the site.
- The `See product detail` button is giving me amazon vibes and doesn't really match the overall look of the site (which is monochromatic)
- The product detail page has a lot of empty white space to the right of the photo, and the content is jammed up to the left margin.
- I like the subtle scaling of the text on the navbar on hover.
- I don't understand the owl. There's not really a universal icon for login so you'l probably need to use text.
  
## Security

- I can fetch the list of users without a token
- I can add a product to the database without a token
- I can get a user's cart without a token
- I can add an item to a cart without a token
- I don't see any kind of express middleware to check for the token an verify the routes.

## Code Quality and Project Management

- You should place the images into a folder `public/images`. Eventually you would want to store these external to the app (like in Amazon S3 or something)
- You shouldn't have CartReducer.js and cartreducer.js
- You should be consistent on column naming in the models, use camelCase for fields that are compound words (since Sequelize defaults to camelCase)
- Don't leave commented out code in the files. Add a // TODO: command if you want to leave some code or something for a future feature.
- Add more comments anytime that it's not obvious what the code is doing.
- You should be using github issues to track, as it allows you to assign users to tasks and put even more details in the cards.
- Avoid generic sounding tasks, be more specific.
- For commit messages be more specific put exactly what changed in the commit message.
- Same thing for Pull Requests.. be specific, I'm seeing names like "Chris Branch" and "Kathia branch". Feature branches should be tied to a card on the project board, and have descriptive names about what exactly is changing.
