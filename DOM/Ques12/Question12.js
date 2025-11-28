
const itemList = document.querySelector('#itemList');

const addItemBtn = document.querySelector('#addItemBtn');

// Function to update the styles of ALL list items
function updateItemStyles() {
    // Get ALL <li> elements inside the <ul>
    const listItems = itemList.querySelectorAll('li');
    
    // Loop through each <li> element
    listItems.forEach((item, index) => {
        // The sequence number is the index + 1
        const sequenceNumber = index + 1;
        
        // Check if the sequence number is odd or even
        if (sequenceNumber % 2 !== 0) {
            // Odd: style the li with italic font & red colour
            item.className = 'italic-red'; // Use a class for easier management
            item.style.fontWeight = 'normal'; // Ensure it's not bold
            item.style.color = 'red';
            item.style.fontStyle = 'italic';
        } else {
            // Even: style the li with bold font & blue colour
            item.className = 'bold-blue'; // Use a class for easier management
            item.style.fontWeight = 'bold';
            item.style.color = 'blue';
            item.style.fontStyle = 'normal'; // Ensure it's not italic
        }
    });
}

// Function to handle the button click
function handleAddItem() {
    // 1. Build a new <li> element with the text "New Item"
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    
    // 1. Add the new <li> element to the <ul>
    itemList.appendChild(newItem);
    
    // 2. Ensure newly added <li> is styled by calling the update function
    //    (This function will restyle all items, including the new one)
    updateItemStyles();
}

// Attach the handleAddItem function to the button's click event
addItemBtn.addEventListener('click', handleAddItem);

// IMPORTANT: Call updateItemStyles once on load 
// to style the initial three <li> items correctly.
updateItemStyles();