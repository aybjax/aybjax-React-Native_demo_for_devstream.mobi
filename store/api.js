import axios from 'axios'

const urlHalf ='https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&orientation=portrait&per_page=10&page=';

export const getImgs = async (page) =>
{
    const response = await axios.get(urlHalf + String(page))
    const data = response.data
    return data
}