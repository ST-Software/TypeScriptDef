interface HandlebarFunction {
    (data?:any): string;
}

module Handlebars {

    export declare interface SafeString { 
        (html: string): SafeString;
    };

    export declare var SafeString: {
        new (value?: any): SafeString;
        toString(): string;
    }
}

interface Handlebars {
    compile(input: string, options?: any): HandlebarFunction;
    registerPartial(name: string, input: string): void;
    registerHelper(name: string, fn: Function, inverse?: bool): void;
}

declare var Handlebars: Handlebars.Handlebars;