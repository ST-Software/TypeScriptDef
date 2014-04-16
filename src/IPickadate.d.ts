declare module Pickadate {

    //Based on http://amsul.ca/pickadate.js/api.htm#api-methods
    export interface IPickadate {
        open(): void;
        close(): void;
        start(): void;
        stop(): void;
        render(): void;
        clear(): void;
        get(): void;
        set(thing: string, value: any): void; //use 'thing' from Pickadate.pickadateSetThing
        set(thing: string, value: any, options: any): void; //use 'thing' from Pickadate.pickadateSetThing
        on(): void;
        off(): void;
        trigger(): void;
    }

    //Interface based on http://amsul.ca/pickadate.js/date.htm
    export interface IPickadateConfig {
        // Dropdown selectors
        selectYears?: any; //boolean or number of years (years will be split up and down around the current year)
        selectMonths?: boolean;

        //date limits
        min?: Date;
        max?: Date;

        // Strings and translations
        monthsFull?: Array<string>;
        monthsShort?: Array<string>;
        weekdaysFull?: Array<string>;
        weekdaysShort?: Array<string>;
        showMonthsShort?: boolean;
        showWeekdaysFull?: boolean;

        // Buttons
        today?: string; //eg: Today
        clear?: string; //eg: Clear

        // Accessibility labels
        labelMonthNext?: string;
        labelMonthPrev?: string;
        labelMonthSelect?: string;
        labelYearSelect?: string;

        // Formats
        format: string; //defaults to 'd mmmm, yyyy'. This is for user
        formatSubmit?: string; //value is sent to server in this format
        hiddenPrefix?: string;
        hiddenSuffix?: string; //defaults to '_submit_'
        hiddenName?: string;

        // Editable input
        editable?: boolean;
        
        // First day of the week
        firstDay?: boolean; //true => monday, false => sunday
        
        // Disable dates
        disable?: any; //see http://amsul.ca/pickadate.js/date.htm#disable-dates-inverted

        // Root container
        container?: string; //Css selector. See http://amsul.ca/pickadate.js/date.htm#container

        // Events
        onStart?: () => void;
        onRender?: () => void;
        onOpen?: () => void;
        onClose?: () => void;
        onSet?: (any) => void;
        onStop?: () => void;

        klass?: IPickadateKlass;
    }

    export interface IPickadateKlass {
        // The element states
        input: string; //defaults to 'picker__input';
        active: string; //defaults to 'picker__input--active';

        // The root picker and states *
        picker: string; //defaults to 'picker';
        opened: string; //defaults to 'picker--opened';
        focused: string; //defaults to 'picker--focused';

        // The picker holder
        holder: string; //defaults to 'picker__holder';

        // The picker frame; wrapper; and box
        frame: string; //defaults to 'picker__frame';
        wrap: string; //defaults to 'picker__wrap';
        box: string; //defaults to 'picker__box';

        // The picker header
        header: string; //defaults to 'picker__header';

        // Month navigation
        navPrev: string; //defaults to 'picker__nav--prev';
        navNext: string; //defaults to 'picker__nav--next';
        navDisabled: string; //defaults to 'picker__nav--disabled';

        // Month & year labels
        month: string; //defaults to 'picker__month';
        year: string; //defaults to 'picker__year';

        // Month & year dropdowns
        selectMonth: string; //defaults to 'picker__select--month';
        selectYear: string; //defaults to 'picker__select--year';

        // Table of dates
        table: string; //defaults to 'picker__table';

        // Weekday labels
        weekdays: string; //defaults to 'picker__weekday';

        // Day states
        day: string; //defaults to 'picker__day';
        disabled: string; //defaults to 'picker__day--disabled';
        selected: string; //defaults to 'picker__day--selected';
        highlighted: string; //defaults to 'picker__day--highlighted';
        now: string; //defaults to 'picker__day--today';
        infocus: string; //defaults to 'picker__day--infocus';
        outfocus: string; //defaults to 'picker__day--outfocus';

        // The picker footer
        footer: string; //defaults to 'picker__footer';

        // Today & clear buttons
        buttonClear: string; //defaults to 'picker__button--clear';
        buttonToday: string; //defaults to 'picker__button--today'
    }
}
