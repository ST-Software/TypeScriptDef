/// <reference path="../jQuery/jquery.d.ts" />
/// <reference path="../jQuery/jqueryui.d.ts" />

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

    export interface SaveOptions {
        silent: bool;
        url: string;
        success: (model: Model, responseData: any) => void;
        error: Function;
    }

    export interface DestroyOptions {
        silent: bool;
        success: (model: Model, responseData: any) => void;
        error: (model: Model, responseData: any) => void;
        sync: Function;
        wait: bool;
    }

    export interface FetchCollectionOptions {
        success: (unknown: any, collection: Backbone.Collection) => void;
        error: () => void;
    }

    export interface FetchModelOptions {
        success: (model: Backbone.Model, response: any) => void;
        error: () => void;
        silent: bool;
    }

    interface BackboneXMLHttpRequest extends XMLHttpRequest, JQueryPromise { }

    export class Model implements EventsInteface {
        constructor (attributes? );
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
        set(attrs: any, options?: Options): void;
        set(attrs: any, options?: any): void;
        set(attrName: string, attrValue: any): void;
        escape(name: string): any;
        has(name: string): bool;
        unset(attrs, opts?: Options): void;
        clear(opts?: Options): void;
        toJSON(): any;
        fetch(opts?: FetchModelOptions): BackboneXMLHttpRequest;
        fetch(opts?: any): BackboneXMLHttpRequest;
        save(attrs?: any, opts?: SaveOptions): BackboneXMLHttpRequest;
        save(attrs?: any, opts?: any): BackboneXMLHttpRequest;
        destroy(opts?: DestroyOptions): void;
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
        fetch(opts?: FetchCollectionOptions): BackboneXMLHttpRequest;
        last(): any;
        get(id: string): any;
        last(n: number): any[];
        filter(f: (elem: any) => any): Collection;
        without(...values: any[]): Collection;
        where(attrs): Model[];
        toJSON(): any;
        models: Model[];
        comparator: (item1: any, item2?: any) => any;
        sort(options?: any);

        // Event interface
        on(ev: string, f: Function, ctx?: any): void;
        off(ev: string, f?: Function, ctx?: any): void;
        trigger(eventName: string, ...params: any[]);

        //functions from Underscore(Collections):
        forEach(iterator: Function, context?: any): void; //alias each
        map(iterator: Function, context?: any): any[];
        reduce(iterator: Function, memo?: any, context?: any): any;
        reduceRight(iterator: Function, memo: any, context?: any): any;
        find(iterator: Function, context?: any): any;
        filter(iterator: Function, context?: any): any[];
        where(properties: { }): any[];
        reject(iterator: Function, context?: any): any[];
        every(iterator: Function, context?: any): bool;
        some(iterator?: any, context?: any): bool;
        include(value: any): bool;
        invoke(methodName: string, arguments?: any): any[];
        max(iterator?: any, context?: any): any;
        min(iterator?: any, context?: any): any;
        sortBy(iterator: Function, context?: any): any[];
        groupBy(iterator: Function): any;
        shuffle(list: any): any;
        toArray(list: any): any[];
        size(list: any): number;

        //functions from Underscore(Arrays):
        sortedIndex(value: any, iterator? ): any;
        first(n?: number): any;
        initial(array: any[], n?: number): any[];
        last(array: any[], n?: number): any;
        rest(array: any[], n?: number): any[];
        without(...values: any[]): any[];
        indexOf(array: any[], value: any, fromIndex: any): any;
        lastIndexOf(array: any[], fromIndex: any): any;
        isEmpty(): bool;

        chain(obj: any): BackboneUnderscoreChain; // chaining
    }

    export interface BackboneUnderscoreChain {
        value(): any;

        //functions from Underscore(Collections):
        forEach(iterator: Function, context?: any): BackboneUnderscoreChain; //alias each
        map(iterator: Function, context?: any): BackboneUnderscoreChain;
        reduce(iterator: Function, memo?: any, context?: any): BackboneUnderscoreChain;
        reduceRight(iterator: Function, memo: any, context?: any): BackboneUnderscoreChain;
        find(iterator: Function, context?: any): BackboneUnderscoreChain;
        filter(iterator: Function, context?: any): BackboneUnderscoreChain;
        where(properties: { }): BackboneUnderscoreChain;
        reject(iterator: Function, context?: any): BackboneUnderscoreChain;
        every(iterator: Function, context?: any): BackboneUnderscoreChain;
        some(iterator?: any, context?: any): BackboneUnderscoreChain;
        include(value: any): BackboneUnderscoreChain;
        invoke(methodName: string, arguments?: any): BackboneUnderscoreChain;
        max(iterator?: any, context?: any): BackboneUnderscoreChain;
        min(iterator?: any, context?: any): BackboneUnderscoreChain;
        sortBy(iterator: Function, context?: any): BackboneUnderscoreChain;
        groupBy(iterator: Function): BackboneUnderscoreChain;
        shuffle(list: any): BackboneUnderscoreChain;
        toArray(list: any): BackboneUnderscoreChain;
        size(list: any): BackboneUnderscoreChain;

        //functions from Underscore(Arrays):
        sortedIndex(value: any, iterator? ): BackboneUnderscoreChain;
        first(n?: number): BackboneUnderscoreChain;
        initial(array: any[], n?: number): BackboneUnderscoreChain;
        last(array: any[], n?: number): BackboneUnderscoreChain;
        rest(array: any[], n?: number): BackboneUnderscoreChain;
        without(...values: any[]): BackboneUnderscoreChain;
        indexOf(array: any[], value: any, fromIndex: any): BackboneUnderscoreChain;
        lastIndexOf(array: any[], fromIndex: any): BackboneUnderscoreChain;
        isEmpty(): BackboneUnderscoreChain;
    }


    export interface ViewConstructorOptions {
        el: JQuery;
    }


    export class View {
        constructor (options?: any);
        initialize(options?: any);
        $(selector: string): JQuery;
        el: HTMLElement;
        $el: JQuery;
        collection: any; //this could be type of Collection, but we can have our own methods/properties on our collection and they would be hidden for intellisense. Waiting for generics in TypeScript...
        model: Model;
        remove(): void;
        delegateEvents: any;
        undelegateEvents(): any;
        make(tagName: string, attrs? , opts? ): View;
        setElement(element: HTMLElement, delegate?: bool): void;
        setElement(element: JQuery, delegate?: bool): void;
        tagName: string;
        events: any;

        static extend: any;
    }


    export class Router {
        routes: any;
        //initialize
        route(route: string, name: string, callback: Function): void;
        navigate(fragment: string, options? ): void;
    }

    declare var history: any;
}





//declare module Backbone {
//    export class Model {
//        constructor (attr? , opts? );
//        get(name: string): any;
//        set(name: string, val: any): void;
//        set(obj: any): void;
//        save(attr? , opts? ): void;
//        destroy(): void;
//        bind(ev: string, f: Function, ctx?: any): void;
//        toJSON(): any;
//    }
//    export class Collection {
//        constructor (models? , opts? );
//        bind(ev: string, f: Function, ctx?: any): void;
//        collection: Model;
//        length: number;
//        create(attrs, opts? ): Collection;
//        each(f: (elem: any) => void ): void;
//        fetch(opts?: any): void;
//        last(): any;
//        last(n: number): any[];
//        filter(f: (elem: any) => any): Collection;
//        without(...values: any[]): Collection;
//    }
//    export class View {
//        constructor (options? );
//        $(selector: string): any;
//        el: HTMLElement;
//        $el: any;
//        model: Model;
//        remove(): void;
//        delegateEvents: any;
//        make(tagName: string, attrs? , opts? ): View;
//        setElement(element: HTMLElement, delegate?: bool): void;
//        tagName: string;
//        events: any;

//        static extend: any;
//    }
//}