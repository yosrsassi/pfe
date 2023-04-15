import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCoverImgComponent } from './choose-cover-img.component';

describe('ChooseCoverImgComponent', () => {
  let component: ChooseCoverImgComponent;
  let fixture: ComponentFixture<ChooseCoverImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCoverImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCoverImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
