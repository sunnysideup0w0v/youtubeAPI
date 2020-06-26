import axios from 'axios';

// const KEY = 'AIzaSyBpUSkPK718gYGoJs0jBXLP7ntSZUknzMM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5
    }
});
