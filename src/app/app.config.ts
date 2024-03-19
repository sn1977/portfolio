// import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, HttpClient, HttpClientModule} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
    defaultLanguage: 'en',
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
    },
});

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), provideAnimationsAsync(),
        provideHttpClient(),
        importProvidersFrom([
            HttpClientModule,
            TranslateModule.forRoot(provideTranslation()),
        ]),
    ],
} as ApplicationConfig;
