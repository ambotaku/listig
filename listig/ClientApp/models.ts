
//import Vue from 'vue';

export interface ListItem {
    name: string;
    count: number;
    priority: number;
}

export interface ItemList {
    id: number;
    name: string;
    master: boolean;
    items: ListItem[];
}


const ListServicePlugin = {
    install(vue: any) {
        vue.prototype.$itemLists = [];
    }  
};

export default ListServicePlugin;