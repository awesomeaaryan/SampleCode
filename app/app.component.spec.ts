/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';// for ng-model
import { TestBed,async,ComponentFixture }      from '@angular/core/testing';
import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

describe('Typescript : AppComponent', function () {
  
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [FormsModule],// for ng-model
       declarations: [AppComponent]
      })
      .compileComponents(); // compile template and css;
   }));

   // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;
   
    fixture.detectChanges(); // trigger initial data binding
  });

  it('Typescript: Click Event Trigger to validate the positive message', () => {
    //positive test values
    comp.agent = "I_am_true";//Sets the textbox value     
    comp.security = "I_am_true";//Sets the textbox value     
    fixture.nativeElement.querySelector('#btnCompare').click();            
    fixture.detectChanges();
    let h1 = fixture.debugElement.query(By.css('span')).nativeElement;        
    expect(h1.innerText).toMatch('Valid security Code');
});

it('Typescript: Click Event Trigger to validate the negative message', () => {
    //Negative test values
    comp.agent = "I_am_true";//Sets the textbox value     
    comp.security = "I_am_false";//Sets the textbox value                                
    fixture.nativeElement.querySelector('#btnCompare').click();            
    fixture.detectChanges();
    let h1 = fixture.debugElement.query(By.css('span')).nativeElement;        
    expect(h1.innerText).toMatch('Invalid security Code');
  });
  
});


 

