//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

//This file should export two array helper functions:
//choice(items): returns a randomly selected item from array of items
//remove(items, item): removes the first matching item from items, if item exists, and returns it.Otherwise returns undefined.

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function choice(items) {
    let idx = Math.floor(Math.random() * items.length)
    return items[idx];

}


function remove(items, item) {
    for (let i = 0; i < items.length; i++)
        if (items[i] === item) {
            // Return the modified array with the item removed
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }

}

export { choice, remove };