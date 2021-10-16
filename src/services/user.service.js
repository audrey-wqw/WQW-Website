import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://137.184.62.240:5000/user/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getAdmin() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  getParticipant() {
    return axios.get(API_URL + 'participant', { headers: authHeader() });
  }

  getVolunteer() {
    return axios.get(API_URL + 'volunteer', { headers: authHeader() });
  }

  getOrganizer() {
    return axios.get(API_URL + 'organizer', { headers: authHeader() });
  }
}

export default new UserService();