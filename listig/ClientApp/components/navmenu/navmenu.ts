import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Navmenu extends Vue {
    glyphicon= 'glyphicon';
    menuOptions = [
        {name: '+Vorlage', path: '/newTerms'},
        {name: '+Liste', path: '/newList'}];
   
}