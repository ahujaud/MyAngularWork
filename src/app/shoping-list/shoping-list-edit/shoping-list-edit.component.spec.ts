import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListEditComponent } from './shoping-list-edit.component';

describe('ShopingListEditComponent', () => {
  let component: ShopingListEditComponent;
  let fixture: ComponentFixture<ShopingListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
