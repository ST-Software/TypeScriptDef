/// <reference path="jquery.d.ts" />

interface JQuery {
    modal(option?: any): JQuery;
    modal(cmd: string): JQuery;
    dropdown(): JQuery;
    scrollspy(): JQuery;
    scrollspy(cmd: string): JQuery;
    tab(options?: any): JQuery;
    tab(cmd: string): JQuery;
    tooltip(options?: any): JQuery;
    tooltip(cmd: string): JQuery;
    popover(options?: any): JQuery;
    popover(cmd: string): JQuery;
    alert(options?: any): JQuery;
    alert(cmd: string): JQuery;
    button(): JQuery;
    button(cmd: string): JQuery;
    collapse(options?: any): JQuery;
    collapse(cmd: string): JQuery;
    carousel(options?: any): JQuery;
    carousel(cmd: string): JQuery;
    typeahead(options?: any): JQuery;
    affix(cmd: string): JQuery;
}