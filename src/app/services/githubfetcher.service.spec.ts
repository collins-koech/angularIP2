import { TestBed, inject } from '@angular/core/testing';

import { GithubfetcherService } from './githubfetcher.service';

describe('GithubfetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubfetcherService]
    });
  });

  it('should be created', inject([GithubfetcherService], (service: GithubfetcherService) => {
    expect(service).toBeTruthy();
  }));
});
