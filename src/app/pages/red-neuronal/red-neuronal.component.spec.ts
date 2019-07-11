import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedNeuronalComponent } from './red-neuronal.component';

describe('RedNeuronalComponent', () => {
  let component: RedNeuronalComponent;
  let fixture: ComponentFixture<RedNeuronalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedNeuronalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedNeuronalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
