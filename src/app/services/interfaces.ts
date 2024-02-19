export interface Exercise {
    id: number;
    name: string;
    gif: string;
}

export interface Routine {
    id: number;
    title: string;
    exercises: Exercise[];
}

export interface Workout {
    id: number;
    name: string;
    routines: Routine[];
}

export interface Diet {
    id: number;
    name: string;
    active: boolean;
  }

export interface TestData {
    diets: any[];
    workouts: Workout[];
}
