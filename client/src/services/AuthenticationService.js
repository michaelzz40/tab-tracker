import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// AuthenticationService.Register({
//     email: 'chen.michae;11@gmail.com',
//     passowrd: '123456'
// })
