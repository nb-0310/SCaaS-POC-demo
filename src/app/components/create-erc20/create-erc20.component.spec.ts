import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateErc20Component } from './create-erc20.component';

describe('CreateErc20Component', () => {
  let component: CreateErc20Component;
  let fixture: ComponentFixture<CreateErc20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateErc20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateErc20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
