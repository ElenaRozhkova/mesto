export default class UserInfo {
    constructor(author) {
        this._name = author.name;
        this._info = author.info;
        this._nameInput = author.nameInput;
        this._infoInput = author.infoInput;
    }

    getUserInfo() {
        this._nameInput.value = this._name.textContent;
        this._infoInput.value = this._info.textContent;
    }

    setUserInfo(user) {
        this._name.textContent = user.nameInput.value;
        this._info.textContent = user.infoInput.value;

    }
}