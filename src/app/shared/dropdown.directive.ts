import { Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.show') toggleClass: boolean;
    toggleShow = false;
    dropdownItem: HTMLDivElement;
    constructor (private el: ElementRef, private ren: Renderer2) { }
    ngOnInit(): void {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        this.dropdownItem = this.el.nativeElement.querySelector('.dropdown-menu');

    }
    @HostListener('click') onclick(eventData: Event) {
        this.toggleShow = !this.toggleShow;
        this.toggleClass = this.toggleShow;
        this.toggleShow
            ? this.ren.addClass(this.dropdownItem, 'show')
            : this.ren.removeClass(this.dropdownItem, 'show');
    }
}
