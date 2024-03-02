import { Routes } from '@angular/router';
import {MainSiteComponent} from './main-site/main-site.component';
import {ImprintComponent} from './imprint/imprint.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainSiteComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent }
];
