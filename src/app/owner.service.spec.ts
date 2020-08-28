import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { OwnerService } from './owner.service';
import { OWNERS } from './app.mock-data';

describe('OwnerService', () => {
  let httpTestingController: HttpTestingController;
  let service: OwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(OwnerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned an observable with correct data', () => {
    service.getOwners().subscribe((owners) => {
      expect(owners.length).toEqual(6);
      expect(owners[0].name).toEqual('Bob');
      expect(owners[1].gender).toEqual('Female');
      expect(owners[2].age).toEqual(45);
      expect(owners[3].pets.length).toEqual(4);
    });

    const req = httpTestingController.expectOne(
      'http://agl-developer-test.azurewebsites.net/people.json'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(OWNERS);
  });
});
