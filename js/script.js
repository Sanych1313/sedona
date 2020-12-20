var searchButton = document.querySelector('.search__button');/*Находим в HTML документе кнопку, при нажатии на которую появиться модальное окно и сохраняем ее в переменную*/

var popupSearch = document.querySelector('.popup-search');/*Находим модальное окно, которое должно появиться при нажатии на кнопку и сохраняем ее в переменную*/

var dateInput = popupSearch.querySelector('[name=date-input]');/*Находим input с атрибутом name="date-input" и сохраняем ее в переменную*/

var dateDeparture = popupSearch.querySelector('[name=date-departure]');/*Находим input с атрибутом name="date-departure" и сохраняем ее в переменную*/

/*Отлавливаем собитие нажатия(клика) по кнопке появления модального окна*/
searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();/*Отменяем нажатие(клик) по кнопке, которое стоит по умолчанию*/
  popupSearch.classList.toggle('popup-search--open');/*Добавляем с помощью toggle класс, при котором появиться модальное окно. Отличие toggle от add в том, что первый добавляет класс, а при повторном нажатии убирает. Второй заменяет существующий класс, а с помощью remove удаляет.*/
  popupSearch.classList.remove('popup-search--error');/*При закрытии модального окна удаляем класс об ошибке заполнения формы так как он показал свою анимацию и больше не нужен*/
  dateInput.focus();/*Устанавливаем фокус на input при открытии модального окна*/
});

/*Отлавливаем событие отправки формы*/
popupSearch.addEventListener('submit', function(evt) {
  if(!dateInput.value || !dateDeparture.value) {/*Задаем условие, которое будет выполняться если первый, второй или оба input не заполненны*/
    evt.preventDefault();/*Отменяем действие по умолчанию, в данном случае отправку формы если поля input не заполнены*/
    popupSearch.classList.remove('popup-search--error');
    popupSearch.offsetWidth = popupSearch.offsetWidth;/*Перед добавлением класса об ошибке запишем две строки в script, чтобы класс срабатывал постоянно, пока форма не заполнена*/
    popupSearch.classList.add('popup-search--error');/*Добавляем модальному окну класс, при котором модальное окно будет прыгать из стороны в сторону, сообщая об ошибке при заполнении*/
  }
});

/*Отлавливаем собитие нажатия на кнопку клавиатуры, при этом правильнее использовать window, а не document*/
window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {/*Задаем условие если нажата определенная кнопка(в данном случае ESC)*/
    if(popupSearch.classList.contains('popup-search--open')) {/*Задаем условие если данное модальное окно имеет класс popup-search--open*/
      evt.preventDefault();/*Отменяем нажатие по кнопке, которое стоит по умолчанию*/
      popupSearch.classList.toggle('popup-search--open');/*Если класс popup-search--open есть, то нажатие по кнопке ESC уберет его и окно скроется*/
      popupSearch.classList.remove('popup-search--error');/*При закрытии модального окна удаляем класс об ошибке заполнения формы так как он показал свою анимацию и больше не нужен*/
    }
  }
});