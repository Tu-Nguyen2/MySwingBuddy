import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import Amplify from 'aws-amplify';
import { aws_config } from 'aws-cdk-lib';
import outputs from '../amplify_outputs.json';


// Amplify.configure(outputs);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
