import * as Path from 'path';
import * as fs from 'fs';

export class Image {

    path: string = '';

    name: string = '';

    format: string = '';

    size: number = 0;

    // /** data:image */
    // public get src(): string {
    //     // data:image/jpg;base64,4s6v5d4asdv84...
    //     return `data:image/${this.format.replace('.', '')};base64,` + this.base64;
    // }

    /** data:image */
    public get src(): string {
        // data:image/jpg;base64,4s6v5d4asdv84...
        return this.img.src;
    }

    /** img tag */
    img: HTMLImageElement = document.createElement('img');

    // base64: string = '';

    constructor(path: string, stat: fs.Stats, buffer: Buffer) {

        this.path = path;
        this.name = Path.basename(this.path);
        this.format = Path.extname(this.path);

        this.size = stat.size;

        // this.base64 = Image.bufferToBase64(buffer);
        const base64 = Image.bufferToBase64(buffer);


        this.img.src = `data:image/${this.format.replace('.','')};base64,${base64}`;

    }

    public static bufferToBase64(buffer: Uint8Array): string {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    // Use this if the above method ran into problems
    // public static bufferToBase64(buffer: Uint8Array): string {
    //     const blob = new Blob([buffer])
    //     let base64 = '';
    //     const reader = new FileReader();
    //     reader.onload = function (event) {
    //         base64 = event?.target?.result as string;
    //     };

    //     reader.readAsDataURL(blob);

    //     return base64;
    // }



}
