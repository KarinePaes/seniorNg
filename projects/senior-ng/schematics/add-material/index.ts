import { Rule, externalSchematic, chain } from '@angular-devkit/schematics';

export default function (options: any): Rule {
  return chain([
    externalSchematic('@angular/material', 'ng-add', {}),
  ]);
}
