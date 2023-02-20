import { TestBed } from '@angular/core/testing';

import { ServicesTodoService } from './services-todo.service';

describe('ServicesTodoService', () => {
  let service: ServicesTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
