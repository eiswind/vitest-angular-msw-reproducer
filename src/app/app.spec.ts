import { provideZonelessChangeDetection } from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { App } from './app';
import {provideHttpClient} from '@angular/common/http';

describe('App', () => {
  let fixture : ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(),provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    await fixture.whenStable();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('John Doe');
  });
});
