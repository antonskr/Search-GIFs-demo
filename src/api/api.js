import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/trending?api_key=YQiZ73lqJTxPV7D3Px4fIIPexS661EQy&limit=4&rating=r',
});

export const giphyAPI = {
    getGiphyData() {
        return instance.get(``)
            .then(response => {
                return response.data;
            });
    }, getSearchGiphyData(text,) {
        debugger
        return instance.get(`https://api.giphy.com/v1/gifs/search?api_key=YQiZ73lqJTxPV7D3Px4fIIPexS661EQy&q=${text}&limit=2&offset=0&rating=r&lang=ru`)
            .then(response => {
                return response.data;
            });
    }
}