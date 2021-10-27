class Media {
    constructor(title, isCheckOut, ratings) {
        this._title = title;
        this._isCheckOut = isCheckOut;
        this._ratings = ratings;
    }

    get title() {
        return this._title;
    }

    get isCheckOut() {
        return this._isCheckOut;
    }

    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckOut = !this._isCheckOut;
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    }

    addRating(newValue) {
        this._ratings.push(newValue);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._isCheckOut = false;
        this._ratings = [];
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._isCheckOut = false;
        this._ratings = [];
    }
}
const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.isCheckOut;
historyOfEverything.addRating(4,5,5);
historyOfEverything.getAverageRating();

const speed = new Movie('Speed','Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.isCheckOut;
speed.addRating(1,1,5);
