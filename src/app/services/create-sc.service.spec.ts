import { TestBed } from '@angular/core/testing';

import { CreateScService } from './create-sc.service';

describe('CreateScService', () => {
  let service: CreateScService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateScService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
