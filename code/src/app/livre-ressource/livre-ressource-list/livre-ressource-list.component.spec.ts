import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreRessourceListComponent } from './livre-ressource-list.component';

describe('LivreRessourceListComponent', () => {
  let component: LivreRessourceListComponent;
  let fixture: ComponentFixture<LivreRessourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreRessourceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreRessourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
