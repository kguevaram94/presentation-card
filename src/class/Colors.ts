type TransparencyType = '0.2' | '0.4' | '0.6' | '0.8';

const alpha = {
    '0.2': '33',
    '0.4': '66',
    '0.6': '99',
    '0.8': 'CC',
}

export abstract class Colors {

    static aliceblue(transparency?: TransparencyType) {
        return !transparency ? '#F0F8FF' : '#F0F8FF' + alpha[transparency]
    }

    static antiquewhite(transparency?: TransparencyType) {
        return !transparency ? '#FAEBD7' : '#FAEBD7' + alpha[transparency]
    }

    static aqua(transparency?: TransparencyType) {
        return !transparency ? '#00FFFF' : '#00FFFF' + alpha[transparency]
    }

    static aquamarine(transparency?: TransparencyType) {
        return !transparency ? '#7FFFD4' : '#7FFFD4' + alpha[transparency]
    }

    static azure(transparency?: TransparencyType) {
        return !transparency ? '#F0FFFF' : '#F0FFFF' + alpha[transparency]
    }

    static beige(transparency?: TransparencyType) {
        return !transparency ? '#F5F5DC' : '#F5F5DC' + alpha[transparency]
    }

    static bisque(transparency?: TransparencyType) {
        return !transparency ? '#FFE4C4' : '#FFE4C4' + alpha[transparency]
    }

    static black(transparency?: TransparencyType) {
        return !transparency ? '#000000' : '#000000' + alpha[transparency]
    }

    static blanchedalmond(transparency?: TransparencyType) {
        return !transparency ? '#FFEBCD' : '#FFEBCD' + alpha[transparency]
    }

    static blue(transparency?: TransparencyType) {
        return !transparency ? '#0000FF' : '#0000FF' + alpha[transparency]
    }

    static blueviolet(transparency?: TransparencyType) {
        return !transparency ? '#8A2BE2' : '#8A2BE2' + alpha[transparency]
    }

    static brown(transparency?: TransparencyType) {
        return !transparency ? '#A52A2A' : '#A52A2A' + alpha[transparency]
    }

    static burlywood(transparency?: TransparencyType) {
        return !transparency ? '#DEB887' : '#DEB887' + alpha[transparency]
    }

    static cadetblue(transparency?: TransparencyType) {
        return !transparency ? '#5F9EA0' : '#5F9EA0' + alpha[transparency]
    }

    static chartreuse(transparency?: TransparencyType) {
        return !transparency ? '#7FFF00' : '#7FFF00' + alpha[transparency]
    }

    static chocolate(transparency?: TransparencyType) {
        return !transparency ? '#D2691E' : '#D2691E' + alpha[transparency]
    }

    static coral(transparency?: TransparencyType) {
        return !transparency ? '#FF7F50' : '#FF7F50' + alpha[transparency]
    }

    static cornflowerblue(transparency?: TransparencyType) {
        return !transparency ? '#6495ED' : '#6495ED' + alpha[transparency]
    }

    static cornsilk(transparency?: TransparencyType) {
        return !transparency ? '#FFF8DC' : '#FFF8DC' + alpha[transparency]
    }

    static crimson(transparency?: TransparencyType) {
        return !transparency ? '#DC143C' : '#DC143C' + alpha[transparency]
    }

    static cyan(transparency?: TransparencyType) {
        return !transparency ? '#00FFFF' : '#00FFFF' + alpha[transparency]
    }

    static darkblue(transparency?: TransparencyType) {
        return !transparency ? '#00008B' : '#00008B' + alpha[transparency]
    }

    static darkcyan(transparency?: TransparencyType) {
        return !transparency ? '#008B8B' : '#008B8B' + alpha[transparency]
    }

    static darkgoldenrod(transparency?: TransparencyType) {
        return !transparency ? '#B8860B' : '#B8860B' + alpha[transparency]
    }

    static darkgray(transparency?: TransparencyType) {
        return !transparency ? '#A9A9A9' : '#A9A9A9' + alpha[transparency]
    }

    static darkgreen(transparency?: TransparencyType) {
        return !transparency ? '#006400' : '#006400' + alpha[transparency]
    }

    static darkgrey(transparency?: TransparencyType) {
        return !transparency ? '#A9A9A9' : '#A9A9A9' + alpha[transparency]
    }

    static darkkhaki(transparency?: TransparencyType) {
        return !transparency ? '#BDB76B' : '#BDB76B' + alpha[transparency]
    }

    static darkmagenta(transparency?: TransparencyType) {
        return !transparency ? '#8B008B' : '#8B008B' + alpha[transparency]
    }

    static darkolivegreen(transparency?: TransparencyType) {
        return !transparency ? '#556B2F' : '#556B2F' + alpha[transparency]
    }

    static darkorange(transparency?: TransparencyType) {
        return !transparency ? '#FF8C00' : '#FF8C00' + alpha[transparency]
    }

    static darkorchid(transparency?: TransparencyType) {
        return !transparency ? '#9932CC' : '#9932CC' + alpha[transparency]
    }

    static darkred(transparency?: TransparencyType) {
        return !transparency ? '#8B0000' : '#8B0000' + alpha[transparency]
    }

    static darksalmon(transparency?: TransparencyType) {
        return !transparency ? '#E9967A' : '#E9967A' + alpha[transparency]
    }

    static darkseagreen(transparency?: TransparencyType) {
        return !transparency ? '#8FBC8F' : '#8FBC8F' + alpha[transparency]
    }

    static darkslateblue(transparency?: TransparencyType) {
        return !transparency ? '#483D8B' : '#483D8B' + alpha[transparency]
    }

    static darkslategray(transparency?: TransparencyType) {
        return !transparency ? '#2F4F4F' : '#2F4F4F' + alpha[transparency]
    }

    static darkslategrey(transparency?: TransparencyType) {
        return !transparency ? '#2F4F4F' : '#2F4F4F' + alpha[transparency]
    }

    static darkturquoise(transparency?: TransparencyType) {
        return !transparency ? '#00CED1' : '#00CED1' + alpha[transparency]
    }

    static darkviolet(transparency?: TransparencyType) {
        return !transparency ? '#9400D3' : '#9400D3' + alpha[transparency]
    }

    static deeppink(transparency?: TransparencyType) {
        return !transparency ? '#FF1493' : '#FF1493' + alpha[transparency]
    }

    static deepskyblue(transparency?: TransparencyType) {
        return !transparency ? '#00BFFF' : '#00BFFF' + alpha[transparency]
    }

    static dimgray(transparency?: TransparencyType) {
        return !transparency ? '#696969' : '#696969' + alpha[transparency]
    }

    static dimgrey(transparency?: TransparencyType) {
        return !transparency ? '#696969' : '#696969' + alpha[transparency]
    }

    static dodgerblue(transparency?: TransparencyType) {
        return !transparency ? '#1E90FF' : '#1E90FF' + alpha[transparency]
    }

    static firebrick(transparency?: TransparencyType) {
        return !transparency ? '#B22222' : '#B22222' + alpha[transparency]
    }

    static floralwhite(transparency?: TransparencyType) {
        return !transparency ? '#FFFAF0' : '#FFFAF0' + alpha[transparency]
    }

    static forestgreen(transparency?: TransparencyType) {
        return !transparency ? '#228B22' : '#228B22' + alpha[transparency]
    }

    static fuchsia(transparency?: TransparencyType) {
        return !transparency ? '#FF00FF' : '#FF00FF' + alpha[transparency]
    }

    static gainsboro(transparency?: TransparencyType) {
        return !transparency ? '#DCDCDC' : '#DCDCDC' + alpha[transparency]
    }

    static ghostwhite(transparency?: TransparencyType) {
        return !transparency ? '#F8F8FF' : '#F8F8FF' + alpha[transparency]
    }

    static gold(transparency?: TransparencyType) {
        return !transparency ? '#FFD700' : '#FFD700' + alpha[transparency]
    }

    static goldenrod(transparency?: TransparencyType) {
        return !transparency ? '#DAA520' : '#DAA520' + alpha[transparency]
    }

    static gray(transparency?: TransparencyType) {
        return !transparency ? '#808080' : '#808080' + alpha[transparency]
    }

    static green(transparency?: TransparencyType) {
        return !transparency ? '#008000' : '#008000' + alpha[transparency]
    }

    static greenyellow(transparency?: TransparencyType) {
        return !transparency ? '#ADFF2F' : '#ADFF2F' + alpha[transparency]
    }

    static grey(transparency?: TransparencyType) {
        return !transparency ? '#808080' : '#808080' + alpha[transparency]
    }

    static honeydew(transparency?: TransparencyType) {
        return !transparency ? '#F0FFF0' : '#F0FFF0' + alpha[transparency]
    }

    static hotpink(transparency?: TransparencyType) {
        return !transparency ? '#FF69B4' : '#FF69B4' + alpha[transparency]
    }

    static indianred(transparency?: TransparencyType) {
        return !transparency ? '#CD5C5C' : '#CD5C5C' + alpha[transparency]
    }

    static indigo(transparency?: TransparencyType) {
        return !transparency ? '#4B0082' : '#4B0082' + alpha[transparency]
    }

    static ivory(transparency?: TransparencyType) {
        return !transparency ? '#FFFFF0' : '#FFFFF0' + alpha[transparency]
    }

    static khaki(transparency?: TransparencyType) {
        return !transparency ? '#F0E68C' : '#F0E68C' + alpha[transparency]
    }

    static lavender(transparency?: TransparencyType) {
        return !transparency ? '#E6E6FA' : '#E6E6FA' + alpha[transparency]
    }

    static lavenderblush(transparency?: TransparencyType) {
        return !transparency ? '#FFF0F5' : '#FFF0F5' + alpha[transparency]
    }

    static lawngreen(transparency?: TransparencyType) {
        return !transparency ? '#7CFC00' : '#7CFC00' + alpha[transparency]
    }

    static lemonchiffon(transparency?: TransparencyType) {
        return !transparency ? '#FFFACD' : '#FFFACD' + alpha[transparency]
    }

    static lightblue(transparency?: TransparencyType) {
        return !transparency ? '#ADD8E6' : '#ADD8E6' + alpha[transparency]
    }

    static lightcoral(transparency?: TransparencyType) {
        return !transparency ? '#F08080' : '#F08080' + alpha[transparency]
    }

    static lightcyan(transparency?: TransparencyType) {
        return !transparency ? '#E0FFFF' : '#E0FFFF' + alpha[transparency]
    }

    static lightgoldenrodyellow(transparency?: TransparencyType) {
        return !transparency ? '#FAFAD2' : '#FAFAD2' + alpha[transparency]
    }

    static lightgray(transparency?: TransparencyType) {
        return !transparency ? '#D3D3D3' : '#D3D3D3' + alpha[transparency]
    }

    static lightgreen(transparency?: TransparencyType) {
        return !transparency ? '#90EE90' : '#90EE90' + alpha[transparency]
    }

    static lightgrey(transparency?: TransparencyType) {
        return !transparency ? '#D3D3D3' : '#D3D3D3' + alpha[transparency]
    }

    static lightpink(transparency?: TransparencyType) {
        return !transparency ? '#FFB6C1' : '#FFB6C1' + alpha[transparency]
    }

    static lightsalmon(transparency?: TransparencyType) {
        return !transparency ? '#FFA07A' : '#FFA07A' + alpha[transparency]
    }

    static lightseagreen(transparency?: TransparencyType) {
        return !transparency ? '#20B2AA' : '#20B2AA' + alpha[transparency]
    }

    static lightskyblue(transparency?: TransparencyType) {
        return !transparency ? '#87CEFA' : '#87CEFA' + alpha[transparency]
    }

    static lightslategray(transparency?: TransparencyType) {
        return !transparency ? '#778899' : '#778899' + alpha[transparency]
    }

    static lightslategrey(transparency?: TransparencyType) {
        return !transparency ? '#778899' : '#778899' + alpha[transparency]
    }

    static lightsteelblue(transparency?: TransparencyType) {
        return !transparency ? '#B0C4DE' : '#B0C4DE' + alpha[transparency]
    }

    static lightyellow(transparency?: TransparencyType) {
        return !transparency ? '#FFFFE0' : '#FFFFE0' + alpha[transparency]
    }

    static lime(transparency?: TransparencyType) {
        return !transparency ? '#00FF00' : '#00FF00' + alpha[transparency]
    }

    static limegreen(transparency?: TransparencyType) {
        return !transparency ? '#32CD32' : '#32CD32' + alpha[transparency]
    }

    static linen(transparency?: TransparencyType) {
        return !transparency ? '#FAF0E6' : '#FAF0E6' + alpha[transparency]
    }

    static magenta(transparency?: TransparencyType) {
        return !transparency ? '#FF00FF' : '#FF00FF' + alpha[transparency]
    }

    static maroon(transparency?: TransparencyType) {
        return !transparency ? '#800000' : '#800000' + alpha[transparency]
    }

    static mediumaquamarine(transparency?: TransparencyType) {
        return !transparency ? '#66CDAA' : '#66CDAA' + alpha[transparency]
    }

    static mediumblue(transparency?: TransparencyType) {
        return !transparency ? '#0000CD' : '#0000CD' + alpha[transparency]
    }

    static mediumorchid(transparency?: TransparencyType) {
        return !transparency ? '#BA55D3' : '#BA55D3' + alpha[transparency]
    }

    static mediumpurple(transparency?: TransparencyType) {
        return !transparency ? '#9370DB' : '#9370DB' + alpha[transparency]
    }

    static mediumseagreen(transparency?: TransparencyType) {
        return !transparency ? '#3CB371' : '#3CB371' + alpha[transparency]
    }

    static mediumslateblue(transparency?: TransparencyType) {
        return !transparency ? '#7B68EE' : '#7B68EE' + alpha[transparency]
    }

    static mediumspringgreen(transparency?: TransparencyType) {
        return !transparency ? '#00FA9A' : '#00FA9A' + alpha[transparency]
    }

    static mediumturquoise(transparency?: TransparencyType) {
        return !transparency ? '#48D1CC' : '#48D1CC' + alpha[transparency]
    }

    static mediumvioletred(transparency?: TransparencyType) {
        return !transparency ? '#C71585' : '#C71585' + alpha[transparency]
    }

    static midnightblue(transparency?: TransparencyType) {
        return !transparency ? '#191970' : '#191970' + alpha[transparency]
    }

    static mintcream(transparency?: TransparencyType) {
        return !transparency ? '#F5FFFA' : '#F5FFFA' + alpha[transparency]
    }

    static mistyrose(transparency?: TransparencyType) {
        return !transparency ? '#FFE4E1' : '#FFE4E1' + alpha[transparency]
    }

    static moccasin(transparency?: TransparencyType) {
        return !transparency ? '#FFE4B5' : '#FFE4B5' + alpha[transparency]
    }

    static navajowhite(transparency?: TransparencyType) {
        return !transparency ? '#FFDEAD' : '#FFDEAD' + alpha[transparency]
    }

    static navy(transparency?: TransparencyType) {
        return !transparency ? '#000080' : '#000080' + alpha[transparency]
    }

    static oldlace(transparency?: TransparencyType) {
        return !transparency ? '#FDF5E6' : '#FDF5E6' + alpha[transparency]
    }

    static olive(transparency?: TransparencyType) {
        return !transparency ? '#808000' : '#808000' + alpha[transparency]
    }

    static olivedrab(transparency?: TransparencyType) {
        return !transparency ? '#6B8E23' : '#6B8E23' + alpha[transparency]
    }

    static orange(transparency?: TransparencyType) {
        return !transparency ? '#FFA500' : '#FFA500' + alpha[transparency]
    }

    static orangered(transparency?: TransparencyType) {
        return !transparency ? '#FF4500' : '#FF4500' + alpha[transparency]
    }

    static orchid(transparency?: TransparencyType) {
        return !transparency ? '#DA70D6' : '#DA70D6' + alpha[transparency]
    }

    static palegoldenrod(transparency?: TransparencyType) {
        return !transparency ? '#EEE8AA' : '#EEE8AA' + alpha[transparency]
    }

    static palegreen(transparency?: TransparencyType) {
        return !transparency ? '#98FB98' : '#98FB98' + alpha[transparency]
    }

    static paleturquoise(transparency?: TransparencyType) {
        return !transparency ? '#AFEEEE' : '#AFEEEE' + alpha[transparency]
    }

    static palevioletred(transparency?: TransparencyType) {
        return !transparency ? '#DB7093' : '#DB7093' + alpha[transparency]
    }

    static papayawhip(transparency?: TransparencyType) {
        return !transparency ? '#FFEFD5' : '#FFEFD5' + alpha[transparency]
    }

    static peachpuff(transparency?: TransparencyType) {
        return !transparency ? '#FFDAB9' : '#FFDAB9' + alpha[transparency]
    }

    static peru(transparency?: TransparencyType) {
        return !transparency ? '#CD853F' : '#CD853F' + alpha[transparency]
    }

    static pink(transparency?: TransparencyType) {
        return !transparency ? '#FFC0CB' : '#FFC0CB' + alpha[transparency]
    }

    static plum(transparency?: TransparencyType) {
        return !transparency ? '#DDA0DD' : '#DDA0DD' + alpha[transparency]
    }

    static powderblue(transparency?: TransparencyType) {
        return !transparency ? '#B0E0E6' : '#B0E0E6' + alpha[transparency]
    }

    static purple(transparency?: TransparencyType) {
        return !transparency ? '#800080' : '#800080' + alpha[transparency]
    }

    static red(transparency?: TransparencyType) {
        return !transparency ? '#FF0000' : '#FF0000' + alpha[transparency]
    }

    static rosybrown(transparency?: TransparencyType) {
        return !transparency ? '#BC8F8F' : '#BC8F8F' + alpha[transparency]
    }

    static royalblue(transparency?: TransparencyType) {
        return !transparency ? '#4169E1' : '#4169E1' + alpha[transparency]
    }

    static saddlebrown(transparency?: TransparencyType) {
        return !transparency ? '#8B4513' : '#8B4513' + alpha[transparency]
    }

    static salmon(transparency?: TransparencyType) {
        return !transparency ? '#FA8072' : '#FA8072' + alpha[transparency]
    }

    static sandybrown(transparency?: TransparencyType) {
        return !transparency ? '#F4A460' : '#F4A460' + alpha[transparency]
    }

    static seagreen(transparency?: TransparencyType) {
        return !transparency ? '#2E8B57' : '#2E8B57' + alpha[transparency]
    }

    static seashell(transparency?: TransparencyType) {
        return !transparency ? '#FFF5EE' : '#FFF5EE' + alpha[transparency]
    }

    static sienna(transparency?: TransparencyType) {
        return !transparency ? '#A0522D' : '#A0522D' + alpha[transparency]
    }

    static silver(transparency?: TransparencyType) {
        return !transparency ? '#C0C0C0' : '#C0C0C0' + alpha[transparency]
    }

    static skyblue(transparency?: TransparencyType) {
        return !transparency ? '#87CEEB' : '#87CEEB' + alpha[transparency]
    }

    static slateblue(transparency?: TransparencyType) {
        return !transparency ? '#6A5ACD' : '#6A5ACD' + alpha[transparency]
    }

    static slategray(transparency?: TransparencyType) {
        return !transparency ? '#708090' : '#708090' + alpha[transparency]
    }

    static slategrey(transparency?: TransparencyType) {
        return !transparency ? '#708090' : '#708090' + alpha[transparency]
    }

    static snow(transparency?: TransparencyType) {
        return !transparency ? '#FFFAFA' : '#FFFAFA' + alpha[transparency]
    }

    static springgreen(transparency?: TransparencyType) {
        return !transparency ? '#00FF7F' : '#00FF7F' + alpha[transparency]
    }

    static steelblue(transparency?: TransparencyType) {
        return !transparency ? '#4682B4' : '#4682B4' + alpha[transparency]
    }

    static tan(transparency?: TransparencyType) {
        return !transparency ? '#D2B48C' : '#D2B48C' + alpha[transparency]
    }

    static teal(transparency?: TransparencyType) {
        return !transparency ? '#008080' : '#008080' + alpha[transparency]
    }

    static thistle(transparency?: TransparencyType) {
        return !transparency ? '#D8BFD8' : '#D8BFD8' + alpha[transparency]
    }

    static tomato(transparency?: TransparencyType) {
        return !transparency ? '#FF6347' : '#FF6347' + alpha[transparency]
    }

    static turquoise(transparency?: TransparencyType) {
        return !transparency ? '#40E0D0' : '#40E0D0' + alpha[transparency]
    }

    static violet(transparency?: TransparencyType) {
        return !transparency ? '#EE82EE' : '#EE82EE' + alpha[transparency]
    }

    static wheat(transparency?: TransparencyType) {
        return !transparency ? '#F5DEB3' : '#F5DEB3' + alpha[transparency]
    }

    static white(transparency?: TransparencyType) {
        return !transparency ? '#FFFFFF' : '#FFFFFF' + alpha[transparency]
    }

    static whitesmoke(transparency?: TransparencyType) {
        return !transparency ? '#F5F5F5' : '#F5F5F5' + alpha[transparency]
    }

    static yellow(transparency?: TransparencyType) {
        return !transparency ? '#FFFF00' : '#FFFF00' + alpha[transparency]
    }

    static yellowgreen(transparency?: TransparencyType) {
        return !transparency ? '#9ACD32' : '#9ACD32' + alpha[transparency]
    }


}