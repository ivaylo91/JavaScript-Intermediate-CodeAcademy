class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set name(schoolName) {
        this._name = schoolName;
    }

    set level(newLevel) {
        this._level = newLevel;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            return 'Invalid input: numberOfStudents must be set to a Number.';
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the level ${this._level}`);
    }

    static pickSubstituteTeacher(substituteTeachers) {

        return substituteTeachers[Math.floor(Math.random() * 2)];
    }
}

class PrimarySchool extends School {
    constructor(name,level, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, level, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeam = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeam;
    }
}

let primarySchool = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be pick up by a parent, ' +
    'guardian, or a family member over the age of 13');
primarySchool.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

let highSchool = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
highSchool.sportsTeams;