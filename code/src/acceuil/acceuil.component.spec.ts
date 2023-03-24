// @ts-ignore
import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { RouterTestingModule } from '@angular/router/testing';
import { acceuilComponent } from './app.component';

describe('acceuilComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        acceuilComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(acceuilComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'code'`, () => {
    const fixture = TestBed.createComponent(acceuilComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('code');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(acceuilComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('code app is running!');
  });
});
