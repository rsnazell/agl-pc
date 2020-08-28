import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { OwnerService } from './owner.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CatsComponent],
      providers: [HttpClient, HttpHandler, OwnerService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AGL Programming Challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AGL Programming Challenge');
  });

  it(`should have as author 'Richard Snazell'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.author).toEqual('Richard Snazell');
  });

  it(`should have as date 'Aug 2020'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.dateCreated).toContain('Aug 2020');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'AGL Programming Challenge'
    );
  });

  it('should render author in uppercase', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(
      'RICHARD SNAZELL'
    );
  });

  it('should render date', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Aug 2020');
  });
});
