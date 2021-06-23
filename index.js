'use strict'
/*3. Вставьте элементы массива объектов (id, title, description) в конец ul так,
 чтобы каждый на каждый объект был свой li.
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.*/
function Book(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
}
const list = document.querySelector('.list');
console.log(list);
const bookList = [];
for (let i = 0; i < 10; i++) {
    let book = new Book(`id${i}`, `title${i}`, `description${i}`);
    bookList.push(book);
}
console.log(bookList);
console.log(Array.isArray(bookList));
const bookList1 = [];
for (let book of bookList) {
    book = Object.values(book);
    bookList1.push(book);
}
bookList1.forEach((item, index) => {
        list.innerHTML += `
            <li class = 'curLi'>${item}
            <button class = 'delButton'> Del </button>
            </li>`
});
const buttons = document.querySelectorAll('.delButton');
function handleClick(event) {
    const currentButton = event.currentTarget;
    currentButton.closest(".curLi").remove();
    console.log(currentButton.parentElement)
};
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
});




