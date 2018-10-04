export enum ActivityType {
  teacher = "TEACHER",
  student = "STUDENT"
}

export interface CommonVals {
  name: string;
  theme: string;
}

// Activity
export interface Activity extends CommonVals {
  participantCount: number;
  teachersOnly: boolean;
}

// Mascot
export interface Mascot extends CommonVals {
  isCool: boolean;
}

export class Campaign {
  private teacherActivities: Activity[] = [];
  private studentActivities: Activity[] = [];
  private mascot: Mascot | undefined;

  /**
   * Add an activity to teacherActivities if teachersOnly
   * Add an activitiy to studentActivities if not teachersOnly
   * @param anActivity -- object with shape of { name:string, theme:string, participantCount:number, teachersOnly:boolean }
   */
  addActivity(anActivity: Activity) {
    if (anActivity.teachersOnly) {
      this.teacherActivities.push(anActivity);
    } else {
      this.studentActivities.push(anActivity);
    }
  }

  /**
   * Set the private mascot member value
   * @param aMascot -- object with shape of { name: string, theme: string, isCool:boolean }
   */
  setMascot(aMascot: Mascot) {
    this.mascot = aMascot;
  }

  /**
   * Return 'Looks like we don't have a mascot...yet!' if mascot null
   * Return '[mascot name] is [cool or not cool] and he reps [theme] if mascot set
   */
  getMasoctInfo() {
    if (this.mascot) {
      return `${this.mascot.name} is ${
        this.mascot.isCool ? 'cool' : 'not cool'
      } and he reps ${this.mascot.theme}`;
    } else {
      return "Looks like we don't have a mascot...yet!";
    }
  }

  /**
   * Return studentActivities if that type requested
   * Return teacherActivities if that type requested
   * @param type -- I'd use an enum here if I was you
   */
  getActivitiesByType(type: ActivityType) {
    if (type === ActivityType.student) {
      return this.studentActivities;
    }

    if (type === ActivityType.teacher) {
      return this.teacherActivities;
    }
  }
}
