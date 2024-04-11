class Song {
    public readonly id: number;
    private name_: string;
    private length_: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name_ = name;
        this.length_ = length;
    }

    get name(): string {
        return this.name_;
    }

    set name(newName: string) {
        this.name_ = newName;
    }

    get length(): number {
        return this.length_;
    }

    set length(newLength: number) {
        this.length_ = newLength;
    }
}

let song = new Song(1, "Bay Cao", 180);
console.log("Cũ", song.name);
console.log("Cũ", song.length);

song.name = "Bay Thấp";
song.length = 200;

console.log("Mới", song.name);
console.log("Mới", song.length);
