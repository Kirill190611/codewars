//Task: Some new cashiers started to work at your restaurant.
//
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
//
// All the orders they create look something like this:
//
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
//
// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
//
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
//
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
//
// The kitchen staff expect the items to be in the same order as they appear in the menu.
//
// The menu items are fairly simple, there is no overlap in the names of the items:
//
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

//Solution:
const menuItems = [ 'Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke' ]
const order = {}
const itemMapping = menuItems.reduce((p, n, i) => (order[n] = i, p[n.toLowerCase()] = n, p), {});

const getOrder = input => [...input]
    .reduce((p, n, _, a, v = p[0] + n, m = itemMapping[v]) => (m
        ? (p[1][order[m]] += ' ' + m, p[0] = '')
        : p[0] += n, p), [ '', menuItems.slice().fill('') ])[1].join('').trim();