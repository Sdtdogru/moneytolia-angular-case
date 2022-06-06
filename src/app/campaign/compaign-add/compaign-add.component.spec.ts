import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaignAddComponent } from './compaign-add.component';

describe('CompaignAddComponent', () => {
  let component: CompaignAddComponent;
  let fixture: ComponentFixture<CompaignAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaignAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaignAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
