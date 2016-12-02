import {NgModule, Component, OnInit}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {Auth} from "./auth";

@Component({
    selector: "body",
    template: "",
    providers: [ Auth ]
})
export class CoreDirective implements OnInit {

    ngOnInit(): void {
        if (this.auth.authenticated()) {
            this.auth.login();
        }
    }

    constructor(private auth : Auth) {}
}

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule ],
    declarations: [
        CoreDirective
    ],
    providers: [
        AUTH_PROVIDERS
    ],
    bootstrap:    [ CoreDirective ]
})
export class Bug { }
