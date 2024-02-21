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

export interface Meal {
    id: number;
    name: string;
    time: string;
}

export interface Day {
    id: number;
    name: string;
    meals: Meal[];
}

export interface Diet {
    id: number;
    name: string;
    days: Day[];
    active: boolean;
  }

export interface TestData {
    diets: any[];
    workouts: Workout[];
}
