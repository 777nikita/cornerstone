import PageManager from "./page-manager";

export default class Custom extends PageManager {
    constructor(context) {
        super(context);

        this.options = {
            template: '../../../templates/pages/custom/page/custom.html',
        };

        return this;
    }
    onReady() {
        $('.link').on('click', () => {
            alert('Clicked!');
        });
    }
}
