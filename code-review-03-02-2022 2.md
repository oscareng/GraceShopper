# Code Review 03-02-3022

## Entities

### Users

- Consider a Role table instead of fields, and many to many relationship between Users and Roles. This is more future proof. (Roles would not be TIER 1 though)
- A guest user is not a role, it's a user that is not logged in. So it won't exist in the database

### Product

- price can't be an integer, as there are cents to account for
- gender, size should probably be an ENUM column listing out the possible sizes, genders.
- category should be it's own table of categories with a many to one relationship with products. (Probably not Tier 1 tho)

## Session

- We are using JWT, and so we don't need to have a Session table. Session tables are usually used if you were using something like express-session middleware with a session cookie. JWT eliminates the need for this

## Orders

- A cart is just an order that has not yet been completed. Carts/Orders should contain LineItems/OrderItems.
- A LineItem shoudl contain the price, quantity and productID. There's a one to many relationship between Orders and LineItems. And a one to many relationship between LineItem and Products
- The "State" of an order (new, complete, shipped, etc) should probably be an ENUM field on the order table.
- A Cart is something that exists only in the frontend for the end-user. To get the current user's cart query for all the line items in their current order (state of `new`)
- Doing this gives you historical data on what the user ordered. The price of the line items can be adjusted at checkout time and the state of the order changed to `completed`

## Routes

- Add a new product and editing products is not a TIER 1 feature.
- You probably don't ever want to DELETE products in the long term. LineItems of orders will have links to products, if you deleted the product it would break a user's ability to look at that previous order.
- Instead of deleting, you would instead set the stock level of the product (how many we have in stock). A 0 would mean the product is disabled, because you don't have any in stock.

## Components

Looks good! Glad you are using Hooks :)
