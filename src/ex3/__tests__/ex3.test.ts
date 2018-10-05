import { Campaign, ActivityType } from '../ex3';

describe('Exercise 3', () => {
  var teacherActivity: {
    name: string;
    theme: string;
    participantCount: number;
    teachersOnly: boolean;
  };
  var studentActivity: {
    name: string;
    theme: string;
    participantCount: number;
    teachersOnly: boolean;
  };
  var mascot: { name: string; theme: string; isCool: boolean };
  var aCamp: Campaign;
  var activitiesArray: any[] = [];

  beforeEach(() => {
    teacherActivity = {
      name: 'Some Name',
      participantCount: 2,
      teachersOnly: true,
      theme: 'Thunder'
    };

    studentActivity = {
      name: 'Not Teacher',
      participantCount: 5,
      teachersOnly: false,
      theme: "dragon'"
    };

    mascot = {
      name: 'Taran',
      theme: 'Thunder',
      isCool: false
    };

    activitiesArray = [];
    aCamp = new Campaign();
  });

  it('Should return the empty array if no teacher activities', () => {
    expect(aCamp.getActivitiesByType(ActivityType.teacher)).toMatchObject([]);
  });

  it('Should return the empty array if no non teacher activities', () => {
    expect(aCamp.getActivitiesByType(ActivityType.student)).toMatchObject([]);
  });

  it('Should be able to add and get Teacher Activities', () => {
    activitiesArray.push(teacherActivity);

    aCamp.addActivity(teacherActivity);

    const found = aCamp.getActivitiesByType(ActivityType.teacher);
    expect(found).toMatchObject(activitiesArray);
  });

  it('Should be able to add and get Non Teacher Activities', () => {
    activitiesArray.push(studentActivity);

    aCamp.addActivity(studentActivity);

    const found = aCamp.getActivitiesByType(ActivityType.student);
    expect(found).toMatchObject(activitiesArray);
  });

  it("Should return 'Looks like we don't have a mascot...yet!' if no mascot set", () => {
    expect(aCamp.getMasoctInfo()).toBe(
      "Looks like we don't have a mascot...yet!"
    );
  });

  it('Should return the mascot info as a string if it has a mascot', () => {
    aCamp.setMascot(mascot);
    const str = `${mascot.name} is ${
      mascot.isCool ? 'cool' : 'not cool'
    } and he reps ${mascot.theme}`;
    expect(aCamp.getMasoctInfo()).toEqual(str);
  });
});
