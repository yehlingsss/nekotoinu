function populateDropdown(category, placeholder) {
    const dropdown = document.getElementById('placesDropdown');
    dropdown.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.textContent = placeholder;
    dropdown.appendChild(defaultOption);

    const selectedCategory = document.getElementById(`${category}Result`);
    if (selectedCategory) {
        const locations = selectedCategory.querySelectorAll('ul');
        locations.forEach(location => {
            const locationName = location.id.replace(`${category}`, '');
            const capitalizedLocation = locationName.charAt(0).toUpperCase() + locationName.slice(1).toLowerCase();
            const option = document.createElement('option');
            option.value = locationName.toLowerCase();
            option.textContent = capitalizedLocation;
            dropdown.appendChild(option);
        });
    }
}

let currentCategory;

function showDropdown(category, placeholder) {
    populateDropdown(category, placeholder);
    const dropdownContainer = document.getElementById('dropdownContainer');
    dropdownContainer.style.display = 'block';

    currentCategory = category;

    const searchResults = document.getElementById('searchResults');
    searchResults.style.display = 'none';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showListings(location) {
    const allLists = document.querySelectorAll('#searchResults > div > ul');
    allLists.forEach(list => {
        list.style.display = 'none';
    });

    const currentCategoryResults = document.getElementById(`${currentCategory}Result`);
    currentCategoryResults.style.display = "block";

    function getCategory() {
        const suppliesResults = document.getElementById('suppliesResult');
        const groomersResults = document.getElementById('groomersResult');
        const vetsResults = document.getElementById('vetsResult');
        const boardingResults = document.getElementById('boardingResult');
        const othersResults = document.getElementById('othersResult');
    
        if (suppliesResults.style.display === 'block') {
            return 'supplies';
        } else if (groomersResults.style.display === 'block') {
            return 'groomers';
        } else if (vetsResults.style.display === 'block') {
            return 'vets';
        } else if (boardingResults.style.display === 'block') {
            return 'boarding';
        } else if (othersResults.style.display === 'block') {
            return 'others';
        }

    }

    const category = getCategory();
    
    const specificLocationList = document.getElementById(`${category}${capitalizeFirstLetter(location)}`);

    if (specificLocationList) {
        const searchResults = document.getElementById("searchResults");
        searchResults.style.display = "block";

        specificLocationList.style.display = 'block';
    }
}
