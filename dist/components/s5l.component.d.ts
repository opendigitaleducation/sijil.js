import { ElementRef, AfterViewInit } from '@angular/core';
import { BundlesService } from '../services';
export declare class S5lComponent implements AfterViewInit {
    private bundlesService;
    constructor(bundlesService: BundlesService);
    wrapperRef: ElementRef;
    private value;
    private loaded;
    private displayedValue;
    parameters: Object | any[];
    fixedLanguage: string;
    private refreshTranslation();
    ngAfterViewInit(): void;
    ngDoCheck(): void;
}
