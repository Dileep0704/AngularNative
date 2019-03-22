import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { ListComponent } from './components/list/list.component.tns';
import { CreateComponent } from './components/create/create.component.tns';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ItemComponent } from './components/item/item.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { CartComponent } from './components/cart/cart.component';
import { StateService } from './shared/state.service';
import { AuthGuardService } from "./shared/auth-guard.service";

const routes: Routes = [
  // { path: "", component: LoginComponent },
  // { path: "authenticated", component: AuthenticateComponent }
  // { path: "", component: ListComponent },
  // { path: "create", component: CreateComponent }
  // { path: "", redirectTo: StateService.isUserLoggedIn() ? "/featured" : "/login", pathMatch: "full" },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "featured", component: FeaturedComponent, canActivate: [AuthGuardService] },
  { path: "item", component: ItemComponent },
  { path: "browse", component: BrowseComponent },
  { path: "category", component: CategoryComponent },
  { path: "search", component: SearchComponent },
  { path: "list", component: ListComponent },
  { path: "cart", component: CartComponent },
  { path: "detail/:id", component: DetailComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
