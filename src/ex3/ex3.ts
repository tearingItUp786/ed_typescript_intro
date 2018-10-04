/**
 * Challenge: Refactor this typescript class and add functionality
 * A new TypeScript developer has just come in and tried to helpful by add typings to this class
 * However, he inlined all the types and repeated a lot of code
 * Take his type annotations and move them out to interfaces! 
 * 
 * Clean up this code!!!
 */
export enum ActivityType {
  teacher = 'TEACHER',
  student = 'STUDENT'
}

export class Campaign {
  private teacherActivities: {
    name: string;
    theme: string;
    participantCount: number;
    teachersOnly: boolean;
  }[] = [];
  private studentActivities: {
    name: string;
    theme: string;
    participantCount: number;
    teachersOnly: boolean;
  }[] = [];
  private mascot: { name: string; theme: string; isCool: boolean } | undefined;

  /**
   * Add an activity to teacherActivities if teachersOnly
   * Add an activitiy to studentActivities if not teachersOnly
   * @param anActivity -- object with shape of { name:string, theme:string, participantCount:number, teachersOnly:boolean }
   */
  addActivity(
    anActivity = {
      name: '',
      theme: '',
      participantCount: 0,
      teachersOnly: false
    }
  ) {}

  /**
   * Set the private mascot member value
   * @param aMascot -- object with shape of { name: string, theme: string, isCool:boolean }
   */
  setMascot(aMascot = { name: '', theme: '', isCool: false }) {}

  /**
   * Return 'Looks like we don't have a mascot...yet!' if mascot null
   * Return '[mascot name] is [cool or not cool] and he reps [theme] if mascot set
   */
  getMasoctInfo() {}

  /**
   * Return studentActivities if that type requested
   * Return teacherActivities if that type requested
   * @param type -- I'd use the enum here if I were you
   */
  getActivitiesByType(type: ActivityType) {}
}
