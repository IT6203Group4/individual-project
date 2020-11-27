import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcarrentalmenuComponent } from './newcarrentalmenu.component';

describe('NewcarrentalmenuComponent', () => {
  let component: NewcarrentalmenuComponent;
  let fixture: ComponentFixture<NewcarrentalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcarrentalmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcarrentalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
