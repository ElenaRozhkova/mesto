export default class UserInfo {
    constructor(author) {
        this._name = author.name;
        this._info = author.info;
        this._nameInput = author.nameInput;
        this._infoInput = author.infoInput;
    }

    getUserInfo() {
        const userInfo = {
            name: this._name.textContent,
            job: this._info.textContent
        }
        return userInfo;

    }

    setUserInfo(user) {
        this._name.textContent = user.nameInput.value;
        this._info.textContent = user.infoInput.value;

    }
}