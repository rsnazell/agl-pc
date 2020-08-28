import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { OwnerService } from '../owner.service';
import { of, throwError } from 'rxjs';
import { CatsComponent } from './cats.component';
import { OWNERS } from '../app.mock-data';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;
  let getOwnersSpy;

  const ownerService = jasmine.createSpyObj('OwnerService', ['getOwners']);

  beforeEach(() => {
    getOwnersSpy = ownerService.getOwners.and.returnValue(of(OWNERS));

    TestBed.configureTestingModule({
      declarations: [CatsComponent],
      providers: [{ provide: OwnerService, useValue: ownerService }],
    });

    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the owners service', () => {
    expect(getOwnersSpy).toHaveBeenCalled();
  });

  it('should render an error', fakeAsync(() => {
    getOwnersSpy.and.returnValue(throwError('OwnerService test failure'));
    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture.componentInstance.error).toEqual('API error');
    expect(
      fixture.nativeElement.querySelector('[data-testid="error-message"]')
        .textContent
    ).toContain('API data is currently unavailable');
  }));

  it('should render gender headings', () => {
    const compiled = fixture.nativeElement;
    const h4 = compiled.querySelectorAll('h4');
    expect(h4[0].textContent).toContain('Male');
    expect(h4[1].textContent).toContain('Female');
  });

  it('should render 2 lists of cats', () => {
    const compiled = fixture.nativeElement;
    const ul = compiled.querySelectorAll('ul');
    expect(ul.length).toEqual(2);
  });

  it('should render male cat names in alphabetic order', () => {
    const compiled = fixture.nativeElement;
    const maleOwnersCats = compiled.querySelectorAll(
      '[data-testid="male-owners-cats"] li'
    );
    expect(maleOwnersCats.length).toEqual(4);
    expect(maleOwnersCats[0].textContent).toContain('Garfield');
    expect(maleOwnersCats[1].textContent).toContain('Jim');
    expect(maleOwnersCats[2].textContent).toContain('Max');
    expect(maleOwnersCats[3].textContent).toContain('Tom');
  });

  it('should render female cat names in alphabetic order', () => {
    const compiled = fixture.nativeElement;
    const maleOwnersCats = compiled.querySelectorAll(
      '[data-testid="female-owners-cats"] li'
    );
    expect(maleOwnersCats.length).toEqual(3);
    expect(maleOwnersCats[0].textContent).toContain('Garfield');
    expect(maleOwnersCats[1].textContent).toContain('Simba');
    expect(maleOwnersCats[2].textContent).toContain('Tabby');
  });
});
