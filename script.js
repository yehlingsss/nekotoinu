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

    const selectedCategory = document.getElementById(`${category.toLowerCase()}Result`);
    if (selectedCategory) {
        const locations = selectedCategory.querySelectorAll('ul');
        locations.forEach(location => {
            const locationName = location.id.replace(`${category.toLowerCase()}`, '');
            const capitalizedLocation = locationName.charAt(0).toUpperCase() + locationName.slice(1).toLowerCase();
            const option = document.createElement('option');
            option.value = locationName.toLowerCase();
            option.textContent = capitalizedLocation;
            dropdown.appendChild(option);
        });
    }
}

function showDropdown(category, placeholder) {
    populateDropdown(category, placeholder);
    const dropdownContainer = document.getElementById('dropdownContainer');
    dropdownContainer.style.display = 'block';

    const searchResults = document.getElementById('searchResults');
    searchResults.style.display = 'none';
}

function showListings(location) {
    const allLists = document.querySelectorAll('.searchResultListing > div');
    allLists.forEach(list => {
        list.style.display = 'none';
    });

    const category = getCategory();
    console.log('Category:', category);
    
    const specificList = document.getElementById(`${category.toLowerCase()}Result`);
    console.log('Specific List:', specificList);

    const specificLocationList = specificList.querySelector(`#${category.toLowerCase()}${location}`);
    console.log('Specific Location List:', specificLocationList);
    
    if (specificLocationList) {
        specificLocationList.style.display = 'block';
    }
}

function getCategory() {
    const suppliesResults = document.getElementById('suppliesResult');
    const groomersResults = document.getElementById('groomersResult');
    const vetsResults = document.getElementById('vetsResult');
    const boardingResults = document.getElementById('boardingResult');
    const othersResults = document.getElementById('othersResult');

    if (suppliesResults.style.display === 'block') {
        return 'Supplies';
    } else if (groomersResults.style.display === 'block') {
        return 'Groomers';
    } else if (vetsResults.style.display === 'block') {
        return 'Vets';
    } else if (boardingResults.style.display === 'block') {
        return 'Boarding';
    } else if (othersResults.style.display === 'block') {
        return 'Others';
    }
    return 'Supplies';
}