import axios from 'axios';
const urlBase = "http://localhost:26112/api/PhysicalPerson";
class BlogNdDataService{
    
    async getAll() {
        axios.get(urlBase)
        .then(res => {
            const persons = res.data;
            return persons
        })
    }   
}

export default new BlogNdDataService();