import {makeAutoObservable} from "mobx";

class WikiStore {
    items = [];
    links = [];

    constructor() {
        makeAutoObservable(this);
    }

    setItems(items) {
        this.items = items;
    }

    setLinks(links) {
        this.links = links;
    }
}

export default new WikiStore();