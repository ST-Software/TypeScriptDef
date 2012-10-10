/// <reference path="./jquery.d.ts" />

declare module Backbone {

    export interface EventsInteface {
        on(ev: string, f: Function, ctx?: any): void;
        off(ev: string, f?: Function, ctx?: any): void;
        trigger(eventName: string, ...params: any[]);        
    }

    export interface EventsObj extends EventsInteface {
        new (): EventsInteface;
    }

    declare var Events: EventsObj;

    export interface Options {
        silent: bool;
        url: string;
        success: Function;
        error: Function;
    }

    interface BackboneXMLHttpRequest extends XMLHttpRequest, JQueryPromise { }

    export class Model implements EventsInteface {
        constructor (attributes?);
        id: any;
        idAttribute: string;
        cid: string;
        attributes: any;
        changed: any;
        //we cannot declare 'defaults' property, because we have declared 'defaults' as a method
        //defaults: any;
        defaults(): any;
        //we cannot declare 'url'/'urlRoot' properties, because we have declared 'url'/'urlRoot' as a method
        //url: string;
        //urlRoot: string;
        collection: any; //this could be type of Collection, but we can have our own methods/properties on our collection and they would be hidden for intellisense. Waiting for generics in TypeScript...
        get(name: string): any;
        set(attrs: any, opts?: Options): void;
        set(attrName: string, attrValue: any): void;
        escape(name: string): any;
        has(name: string): bool;
        unset(attrs, opts?: Options): void;
        clear(opts?: Options): void;
        toJSON(): any;
        fetch(opts?: any): BackboneXMLHttpRequest;
        save(attrs?: any , opts?: Options): BackboneXMLHttpRequest;
        destroy(opts?: Options): void;
        validate(attrs: any): void;
        isValid(): bool;
        url(): string;
        urlRoot(): string;
        parse(data: any): void;
        clone(): Model;
        isNew(): bool;
        change(): void;
        hasChange(name?: string): bool;
        changedAttributes(attrs?: any): any;
        previous(name: string): any;
        previousAttributes(): any;

        // Event interface
        on(ev: string, f: Function, ctx?: any): void;
        off(ev: string, f?: Function, ctx?: any): void;
        trigger(eventName: string, ...params: any[]);
    }

    export class Collection implements EventsInteface {
        constructor (models?: any[], opts?: Options);
        length: number;
        create(attrs, opts?: Options): Collection;
        each(f: (elem: any) => void ): void;
        fetch(opts?: Options): BackboneXMLHttpRequest;
        last(): any;
        last(n: number): any[];
        filter(f: (elem: any) => any): Collection;
        without(...values: any[]): Collection;
        where(attrs): Model[];
        toJSON(): any;
        models: Model[];

        // Event interface
        on(ev: string, f: Function, ctx?: any): void;
        off(ev: string, f?: Function, ctx?: any): void;
        trigger(eventName: string, ...params: any[]);
    }

    export class View {
        constructor (options?: any);
        initialize (options?: any);
        $(selector: string): JQuery;
        el: HTMLElement;
        $el: JQuery;
        collection: any; //this could be type of Collection, but we can have our own methods/properties on our collection and they would be hidden for intellisense. Waiting for generics in TypeScript...
        model: Model;
        remove(): void;
        delegateEvents: any;
        make(tagName: string, attrs? , opts? ): View;
        setElement(element: HTMLElement, delegate?: bool): void;
        setElement(element: JQuery, delegate?: bool): void;
        tagName: string;
        events: any;

        static extend: any;
    }
}