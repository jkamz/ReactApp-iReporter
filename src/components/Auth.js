import decode from "jwt-decode";

export default class AuthHelper {
    
    login = (username, password) => {

        const loginUrl = "https://ireporter-drf-api-staging.herokuapp.com/api/auth/login/";

        return this.fetch(loginUrl, {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        }).then (res => {
            if (res.message){
                return false;
            } else {
                this.setToken(res.token);
                return Promise.resolve(res);
            }
            
        });
    };

    setToken = token => {
        localStorage.setItem("token", token);
    };

    isTokenExpired = token => {
        try {
            const decodedToken = decode(token);
            if (decodedToken.exp < Date.now() / 1000){
                return true;
            } else return false;
        }
        catch(error){
            console.log("could not check expiry");
            return false
        }
    };

    isLoggedIn = () => {
        const token = this.getToken();
        return !this.isTokenExpired(token) && !!token;
    }

    getToken = () => {
        return localStorage.getItem("token");
    }

    getConfirmation = () => {
        let ans = decode(this.getToken());
        console.log("ans");
        return ans;  
    }

    fetch = (url, options) => {

        const headers = {
            "Content-Type": "application/json"
          }
        
        if(this.isLoggedIn()){
            headers["Authorization"] = "Bearer " + this.getToken();
        }

        return fetch(url, {
            headers,
            ...options
        })
          .then(this._checkStatus)
          .then(response => response.json());
    };

    _checkStatus = response => {
        if (response.status >=200 && response.status <= 402){
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };

    logout = () => {
        localStorage.removeItem("token")
    }

}