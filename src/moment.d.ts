declare interface Moment {

    fromNow(withoutSuffix?: bool): Moment;
    isValid(): bool;

    add(attr: string, value: number): Moment;
    subtract(attr: string, value: number): Moment;

    startOf(attr: string): Moment;
    endOf(attr: string): Moment;
    sod(): Moment;
    eod(): Moment;
    local(): Moment;
    format(dateFormat?: string): string;
    
    year(value: number): void;
    year(): number;
    month(value: number): void;
    month(): number;
    day(value: number): void;
    day(): number;
    hours(value: number): void;
    hours(): number;
    minutes(value: number): void;
    minutes(): number;
    seconds(value: number): void;
    seconds(): number;
    milliseconds(value: number): void;
    milliseconds(): number;
    
        
    (): Moment;
    (date: Date): Moment;
    (params: number[]): Moment;
    (dateText: string, dateFormat?: string): Moment;
    (dateText: string, dateFormats?: string[]): Moment;
    (miliseconds: number): Moment;
    
    unix(timestamp: number): Moment;
    utc(): Moment;
};

declare var moment: Moment;