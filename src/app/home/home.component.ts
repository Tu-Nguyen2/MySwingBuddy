import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import config  from './amplifyconfiguration.json';

Amplify.configure(config);
@Component({
  selector: 'app-my-swing-buddy',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}