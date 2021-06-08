import {imageElement, imageCaption} from './../../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(item) {
        imageElement.src = item.link;
        imageElement.alt = item.name;
        imageCaption.textContent = item.name;
        super.open();
    }
}