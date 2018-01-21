import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Newlist extends Vue {
    listName: string;
    newItem: string;
    items: string[] = ['eene', 'mene', 'muff'];

    delItem(index: number) {
        this.items.splice(index, 1);
    }

    addItem() {
        if (!this.newItem || !this.items.filter((it) => it===this.newItem)) {
            return;
        }

        this.items.push(this.newItem);
    }
}
