import { TestBed } from '@angular/core/testing';

import { CreateErc20Service } from './create-erc20.service';

describe('CreateErc20Service', () => {
  let service: CreateErc20Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateErc20Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
