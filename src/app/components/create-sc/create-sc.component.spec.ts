import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScComponent } from './create-sc.component';

describe('CreateScComponent', () => {
  let component: CreateScComponent;
  let fixture: ComponentFixture<CreateScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateScComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
