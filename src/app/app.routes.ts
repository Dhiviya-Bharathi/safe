import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MessageComponent } from './home/message/message.component';
import { MainComponent } from './home/main/main.component';

const appRoutes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'message',
				component: MessageComponent
			},
			{
				path: '',
				component: MainComponent
			}
		]
	},	
	{ 
	    path: '',   
	    redirectTo: '/home', 
	    pathMatch: 'full' 
  	}
]; 

export const AppRouter = RouterModule.forRoot(appRoutes);