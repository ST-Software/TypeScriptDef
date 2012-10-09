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
        constructor (attr? , opts? );
        id: any;
        idAttribute: string;
        cid: string;
        attributes: any;
        changed: any;
        defaults: any;
        //url: string;
        //urlRoot: string;

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
        constructor (attrs?: any, opts?: Options);
        collection: any;
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

        // Event interface
        on(ev: string, f: Function, ctx?: any): void;
        off(ev: string, f?: Function, ctx?: any): void;
        trigger(eventName: string, ...params: any[]);                
    }

    export class View {
        constructor (options? );
        initialize (options?);
        $(selector: string): any;
        el: HTMLElement;
        $el: any;
        collection: any;
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