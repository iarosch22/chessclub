export default class Slider {
    constructor(container, itemSelector) {
        this._container = document.querySelector(container);
        this._breadcrumbs = this._container.querySelector('.breadcrumbs');
        this._items = Array.from(this._container.querySelectorAll(itemSelector));
        this._buttons = Array.from(this._container.querySelectorAll('.breadcrumbs__input'));
    }

    _setImage() {
        this._buttons.forEach((button, index) => {
            if(button.checked) {
                //this._items[index].classList.add('active');
                console.log(index);
            }
        })
    }

    _deleteImage() {
        this._items.forEach((item) => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            }
        })

        this._buttons.forEach((button, index) => {
            if(button.checked) {
                //this._items[index].classList.add('active');
                console.log(index);
            }
        })
    }

    _setEventListiners() {
        this._breadcrumbs.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('breadcrumbs__dot')) {
                this._deleteImage();
            }
        })
    }

    createSlider() {
        this._setEventListiners();
    }
}