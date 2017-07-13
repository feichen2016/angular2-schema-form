import { Component } from '@angular/core';

import { ObjectLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-form-object',
  template: `<fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
<div class="row">
	<legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
	<div *ngFor="let fieldId of fieldset.fields" class="col-6 form-group">
		<sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
	</div>
	</div>
</fieldset>`
})
export class ObjectWidget extends ObjectLayoutWidget { }
