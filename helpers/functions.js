import ImageModel from '../models/ImageModel'

export const parseJson = (json) =>
{
    const imgs = []
    let response
    if(typeof json === 'string') response = JSON.parse(json)
    else response = json
    response.forEach(img => {
        imgs.push(new ImageModel(img))
    });
    return imgs
}