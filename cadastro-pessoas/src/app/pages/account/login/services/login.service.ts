import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    public login({ login, password }) {
        if (login === "tiago" && password === "123") {
            this.persistToken(this.getToken())
            return true;
        }
        return false;
    }

    private getToken() {
        return Math.random().toString(36).substring(7);
    }

    private persistToken(token: string) {
        localStorage.setItem("token", token)
    }
}