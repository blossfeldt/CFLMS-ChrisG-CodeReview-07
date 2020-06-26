import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},

	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'blog',
		component: BlogComponent,
	},
	{
		path: 'travel',
		component: TravelsComponent,
	},
	{
		path: 'cart',
		component: CartComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
