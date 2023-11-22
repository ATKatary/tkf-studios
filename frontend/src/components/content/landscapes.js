export const LANDSCAPES_GC = (props) => {
    const images = require.context("../../assets/media/images/landscapes/", true);

    const groups = []
    images.keys().map((key, i) => {
        
        if (/[/]group[0-9]+[/]/g.test(key)) {
            const j = Number.parseInt(key.split("/")[1].match(/[0-9]+/g)[0]);
            const pic = {
                src: images(key)
            }
            if (groups.length > j) groups[j].push(pic);
            else {
                while (groups.length <= j) groups.push([])
                groups[j].push(pic);
            }
        }
    })

    return {
        IMAGES: groups
    }
}