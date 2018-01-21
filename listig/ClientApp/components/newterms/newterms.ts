import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import {ListItem, ItemList} from '../../models';

@Component({})
export default class NewtermsComponent extends Vue {
    listName: string = '';
    newItem: string = '';
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
    
    saveList() {
        if (!this.listName) {
            return;
        }
        
        let list: ItemList = { master: true, id: 1, name: this.listName, items: [] };
        list.items = this.items.map(it => <ListItem>{name: it, count:1, priority: 1} );
    }
}
