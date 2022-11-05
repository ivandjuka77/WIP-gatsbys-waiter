# Gatsby's Waiter
Gatsby's Waiter is a web application that helps waiters keep track of tables, inventory and to calcuate their payout for the day.

**Link to project:** TBA

## How It's Made:

**Tech used:** React, Redux, Express, Node, MongoDB, HTML, CSS, Sass

The application is connected to a premade Database of drinks that the inventory currently holds. User needs to sign in or make an account to access the application. 

On the /tables route, 9 tables are displayed and clicking on them displays a popup where the waiter can click on a drink and order a specific amount, which 
will be deducted from the database and added to the local storage which tracks the waiter's performance (drinks sold, value of drinks sold, his pay).

The /inventory route keeps track of the drinks and can help the waiter with choosing a substitute drink if the requested is out of stock. The waiter can also order more
items to the inventory if the item is out of stock. 

Finally, the /payout route displays the current stats of the waiter, and has a button to end the shift,
which logs out the waiter and clears out the stats. NOTE: Not all functionality is implemented yet.

## Optimizations

- Media tags
- Ordered drinks for each table will be displayed under the table name
- /inventory will have a search, filter and "order" button
- Better visuals
- Dark mode
- Animation & no animation mode (Animations can slow down the waiter)
- TBA

## Lessons Learned:

- Learned about Redux global states, slices, store, etc.
- Learned about React state, useEffect, hooks, and general tricks.
- Improved knowledge of Backend, localStorage, API Calls, MongoDB, etc.
- Understood Axios and how it works
