module jasmine {

    export interface Matcher {
        toEqual(obj: any): void;
        toBe(obj: any): void;
        toMatch(pattern: RegExp): void;
        toMatch(pattern: string): void;
        toBeDefined(): void;
        toBeUndefined(): void;
        toBeNull(): void;
        toBeTruthy(): void;
        toBeFalsy(): void;
        toContain(y: any): void;
        toBeLessThan(y: any): void;
        toBeGreaterThan(y: any): void;
        toThrow(e: any): void;

        not: Matcher;

        // spy
        toHaveBeenCalled(): void;
        toHaveBeenCalledWith(...args: any[]): void;
    }

    export interface Call {
        args: any[];
    }

    export interface Spy { 
        mostRecentCall: Call;
        calls: Call[];
        andCallThrough(): Spy;
        andReturn(result: any): Spy;
        andCallFake(fun: Function): Spy;
        identity: string;
    }

    export interface Clock {
        useMock(): void;
        tick(value: number): void;
    }

    export interface Environment {
        updateInterval: number;
        addReporter(reporter: any): void;
        execute(): void;
        versionString(): string;
    }

    declare export var createSpy: (obj: any) => Spy;
    declare export var createSpyObj: (identity: string, methodNames: string[]) => any;
    declare export var any: (obj: any) => any;
    declare export var Clock: Clock;
    declare export var getEnv: () => Environment;
}

declare var describe: (description: string, Function) => void;
declare var xdescribe: (description: string, Function) => void;
declare var it: (description: string, Function) => void;
declare var expect: (obj: any) => jasmine.Matcher;
declare var beforeEach: (fun: Function) => void;
declare var afterEach: (fun: Function) => void;
declare var spyOn: (obj: any, methodName: string) => jasmine.Spy;

declare var runs: (fun: Function) => void;
declare var waitsFor: (fun: Function, description: string, timeout: number) => void;