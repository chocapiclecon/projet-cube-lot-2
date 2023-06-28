import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonRessourceListComponent } from './son-ressource-list.component';

describe('SonRessourceListComponent', () => {
  let component: SonRessourceListComponent;
  let fixture: ComponentFixture<SonRessourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonRessourceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonRessourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
