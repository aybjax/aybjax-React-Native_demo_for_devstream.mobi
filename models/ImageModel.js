export default class ImageModel {
    constructor(img)
    {
        let title=''
        if( img['sponsorship'] && img['sponsorship']['tagline'] )
        {
            title = img['sponsorship']['tagline'];
        }else if( img['description'] )
        {
            title = img['description']
        }else if( img['alt_description'] )
        {
            title = img['alt_description']
        }else
        {
            title = 'No title';
        }

        this.id = img['id']
        this.thumb = img['urls']['thumb']
        this.image = img['urls']['small']
        this.title = title
        this.author = img['user']['username']
    }
}