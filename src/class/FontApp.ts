type FontFamilyType = { 'fontFamily': string }

export abstract class FontApp {


    static get bold(): FontFamilyType {
        return { 'fontFamily': 'DMSans-Bold' };
    }

    static get regular(): FontFamilyType {
        return { 'fontFamily': 'DMSans-Regular' };
    }

    static get medium(): FontFamilyType {
        return { 'fontFamily': 'DMSans-Medium' };
    }

    static get italic(): FontFamilyType {
        return { 'fontFamily': 'DMSans-Italic' };
    }

}
