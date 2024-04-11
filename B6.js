"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name_ = name;
        this.length_ = length;
    }
    get name() {
        return this.name_;
    }
    set name(newName) {
        this.name_ = newName;
    }
    get length() {
        return this.length_;
    }
    set length(newLength) {
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
