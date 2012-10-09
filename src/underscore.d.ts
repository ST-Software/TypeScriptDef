interface Iterator {
    (value: any, key: any, list: any): any;
}

interface ReduceIterator {
    (memo: any, value: any, key: any, list: any): any;
}

interface Underscore {

    //collection functions
    each(list: any, iterator: Iterator, context?: any): any[];
    map(list: any, iterator: Iterator, context?: any): any[];
    reduce(list: any, iterator: ReduceIterator, memo: any, context?: any): any[];
    reduceRight(list: any, iterator: ReduceIterator, memo: any, context?: any): any[];
    find(list: any, iterator: Iterator, context?: any): any[];
    filter(list: any, iterator: Iterator, context?: any): any[];
    where(list: any, properties: any): any[];
    reject(list: any, iterator: Iterator, context?: any): any[];
    all(list: any, iterator: Iterator, context?: any): bool;
    any(list: any, iterator?: Iterator, context?: any): bool;
    contains(list: any, value: any): bool;
    invoke(list: any[], methodName: string, ...args: any[]): bool;
    pluck(list: any[], property: string): any[];
    max(list: any, iterator?: Iterator, context?: any): any;
    min(list: any, iterator?: Iterator, context?: any): any;
    sortBy(list: any, iterator: Iterator, context?: any): any[];
    groupBy(list: any, iterator: Iterator): any;
    countBy(list: any, property: string): any;
    shuffle(list: any): any[];
    toArray(list: any): any[];
    size(list: any): number;

    // array functions
    first(array: any[]): any;
    first(array: any[], n: number): any[];
    initial(array: any[], n?: number): any[];
    last(array: any[]): any;
    last(array: any[], n: number): any[];
    rest(array: any[], index?: number): any[];
    compact(array: any[]): any[];
    flatten(array: any[], shallow?: bool): any[];
    without(array: any[], ...values: any[]): any[];
    union(...arrays: any[]): any[];
    intersection(...arrays: any[]): any[];
    difference(array: any[], ...values: any[]): any[];
    uniq(array: any[], isSorted?: bool, iterator?: Iterator): any[];
    zip(...arrays: any[]): any[];
    object(array: any[]): any;
    indexOf(array: any[], value: any, isSorted?: bool): number;
    lastIndexOf(array: any[], value: any, fromIndex?: number): number;
    sortedIndex(array: any[], value: any, iterator?: Iterator): number;
    range(stop: number, step?: number): number[];
    range(start: number, stop: number, step?: number): number[];

    // function functions
    bind(fun: Function, object: any, ...arguments: any[]): Function;
    bindAll(object: any, methodNames?: string[]): any;    
    memoize(fun: Function, hashFunction: Function): Function;
    delay(fun: Function, wait: number, ...arguments: any[]): any;
    defer(fun: Function, ...arguments: any[]): any;
    throttle(fun: Function, wait: number): Function;
    debounce(fun: Function, wait: number, immediate?: bool): Function;
    once(fun: Function): Function;
    after(count: number, fun: Function): Function;
    wrap(fun: Function, wrapper: (f: Function) => any): Function;
    compose(...functions: Function[]): Function;

    // object functions
    keys(object: any): string[];
    values(object: any): any[];
    pairs(object: any): any[];
    invert(object: any): any;
    functions (object: any): string[];
    extend(desination: any, ...sources: any[]): any;
    pick(object: any, ...keys: string[]): any;
    omit(object: any, ...keys: string[]): any;
    defaults(object: any, ...defaults: any[]): any;
    clone(object: any): any;
    tap(object: any, fun: (obj: any) => void): any;
    has(object: any, key: string): bool;
    isEqual(object: any, other: any): bool;
    isEmpty(object: any): bool;
    isElement(object: any): bool;
    isArray(object: any): bool;
    isObject(object: any): bool;
    isArguments(object: any): bool;
    isFunction(object: any): bool;
    isString(object: any): bool;
    isNumber(object: any): bool;
    isFinite(object: any): bool;
    isBoolean(object: any): bool;
    isDate(object: any): bool;
    isRegExp(object: any): bool;
    isNaN(object: any): bool;
    isNull(object: any): bool;
    isUndefined(object: any): bool;

    //utility functions
    noConflict(): Underscore;
    identity(value: any): any;
    times(n: number, iterator: (index: number) => void, context?: any): void;
    random(min: number, max: number): number;
    mixin(object: any): any;
    uniqueId(): number;
    uniqueId(prefix: string): string;
    escape(text: string): string;
    result(object: any, property: string): any;
    template(templateString: string, data: any, settings?: any): string;
    // if data is null the return value is function
    //template(templateString: string, data: any, settings?: any): (data?: any) => string; 
    template(templateString: string): (data?: any) => string;

    // chaining
    chain(obj: any): UnderscoreChain;
}

interface UnderscoreChain {
    value(): any;

    //collection functions
    each(iterator: Iterator, context?: any): UnderscoreChain;
    map(iterator: Iterator, context?: any): UnderscoreChain;
    reduce(iterator: ReduceIterator, memo: any, context?: any): UnderscoreChain;
    reduceRight(iterator: ReduceIterator, memo: any, context?: any): UnderscoreChain;
    find(iterator: Iterator, context?: any): UnderscoreChain;
    filter(iterator: Iterator, context?: any): UnderscoreChain;
    where(properties: any): UnderscoreChain;
    reject(iterator: Iterator, context?: any): UnderscoreChain;
    all(iterator: Iterator, context?: any): UnderscoreChain;
    any(iterator?: Iterator, context?: any): UnderscoreChain;
    contains(value: any): UnderscoreChain;
    invoke(methodName: string, ...args: any[]): UnderscoreChain;
    pluck(property: string): UnderscoreChain;
    max(iterator?: Iterator, context?: any): UnderscoreChain;
    min(iterator?: Iterator, context?: any): UnderscoreChain;
    sortBy(iterator: Iterator, context?: any): UnderscoreChain;
    groupBy(iterator: Iterator): UnderscoreChain;
    countBy(property: string): UnderscoreChain;
    shuffle(): UnderscoreChain;
    toArray(): UnderscoreChain;
    size(): UnderscoreChain;

    // array functions
    first(n?: number): UnderscoreChain;
    initial(n?: number): UnderscoreChain;
    last(n?: number): UnderscoreChain;
    rest(index?: number): UnderscoreChain;
    compact(): UnderscoreChain;
    flatten(shallow?: bool): UnderscoreChain;
    without(...values: any[]): UnderscoreChain;
    union(...arrays: any[]): UnderscoreChain;
    intersection(...arrays: any[]): UnderscoreChain;
    difference(...values: any[]): UnderscoreChain;
    uniq(isSorted?: bool, iterator?: Iterator): UnderscoreChain;
    object(): UnderscoreChain;
    indexOf(value: any, isSorted?: bool): number;
    lastIndexOf(value: any, fromIndex?: number): number;
    sortedIndex(value: any, iterator?: Iterator): number;
}


declare var _: Underscore;

_.chain([1, 2, 4]).first().value();
