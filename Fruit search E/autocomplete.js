const searchInput = document.querySelector('.search-input');
const dropdown = document.querySelector('.dropdown');

searchInput.addEventListener('input', search);

function search() {
  const userInput = searchInput.value.toLowerCase();
  const results = fruits.filter(fruit => fruit.toLowerCase().includes(userInput));
  displayResults(results);
}

function displayResults(results) {
  const dropdownItemsContainer = document.querySelector('.dropdown-items');
  dropdownItemsContainer.innerHTML = '';

  if (results.length > 0) {
    results.forEach(fruit => {
      const dropdownItem = document.createElement('div');
      dropdownItem.classList.add('dropdown-item');
      dropdownItem.textContent = fruit;
      dropdownItem.addEventListener('click', useSuggestion);
      dropdownItemsContainer.appendChild(dropdownItem);
    });

    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

dropdown.addEventListener('mouseover', highlightSuggestion);

function highlightSuggestion(event) {
  const hoveredItem = event.target;
  if (hoveredItem.classList.contains('dropdown-item')) {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => item.classList.remove('highlighted'));
    hoveredItem.classList.add('highlighted');
  }
}

function useSuggestion(event) {
  const suggestion = event.target.textContent;
  searchInput.value = suggestion;
  dropdown.style.display = 'none';
}

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];










// const searchInput = document.querySelector('.search-input');//GET the search input element
// searchInput.addEventListener('input', search);//adds event listener for keystrokes

// function search() {
//     const userInput = searchInput.value.toLowerCase();// Get the user input from the search bar
//     const results = fruits.filter(fruit => fruit.toLowerCase().includes(userInput)); // Filter the fruits based on user input
//     displayResults(results);    // Display the results as a dropdown
//   }

//   function displayResults(results) {
//     const dropdown = document.querySelector('.dropdown');
//     const dropdownItemsContainer = document.querySelector('.dropdown-items');
//     dropdownItemsContainer.innerHTML = '';
  
//     if (results.length > 0) {
//       results.forEach(fruit => {
//         const dropdownItem = document.createElement('div');
//         dropdownItem.classList.add('dropdown-item');
//         dropdownItem.textContent = fruit;
//         dropdownItem.addEventListener('click', useSuggestion);
//         dropdownItemsContainer.appendChild(dropdownItem);
//       });
  
//       dropdown.style.display = 'block'; // Show the dropdown
//     } else {
//       dropdown.style.display = 'none'; // Hide the dropdown if no results
//     }
//   }
  

//   dropdown.addEventListener('mouseover', highlightSuggestion);//// Add event listener to trigger when hovering over a suggestion


// function highlightSuggestion(event) {
//   const hoveredItem = event.target;
//   if (hoveredItem.classList.contains('dropdown-item')) {
//     const dropdownItems = document.querySelectorAll('.dropdown-item');
//     dropdownItems.forEach(item => item.classList.remove('highlighted'));
//     hoveredItem.classList.add('highlighted');
//   }
// }

// function useSuggestion(event) {
//     const suggestion = event.target.textContent;
//     searchInput.value = suggestion;
//     dropdown.style.display = 'none';
//   }

//   const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

