const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownOption = document.querySelectorAll('.dropdown__link');


dropdownOption.forEach(item => {
  item.addEventListener('click', selectElem);
});

function showDropdown() {
  dropdownList.classList.add('dropdown__list_active');
};

dropdownValue.addEventListener('click', showDropdown);


function selectElem(e) {
  e.preventDefault();
  dropdownList.classList.remove('dropdown__list_active');
  dropdownValue.innerHTML = e.target.textContent;
};