import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID PM1Qp0rq6xONe5cdMh4QFFNuy5yGYhVPwPNViANBYJE",
  },
});
