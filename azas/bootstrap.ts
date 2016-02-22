import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AzasComponent} from './azas.component';
//import {LoginComponent} from './login.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RestClient} from './rest';

RestClient.host = "http://localhost:8080"

bootstrap(AzasComponent, [HTTP_PROVIDERS, RestClient]);
//bootstrap(LoginComponent);
