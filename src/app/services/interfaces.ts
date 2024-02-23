export interface Execution {
    reps: number;
    sets: number;
    weight: number;
}

export interface Exercise {
    id: number;
    name: string;
    gif: string;
    muscle_group: string;
    // execution: Execution;
}

export interface Routine {
    id: number | undefined;
    title: string;
    exercises: Exercise[];
    workout: number;
}

export interface Workout {
    id: number | undefined;
    name: string;
    routines: Routine[];
    active: boolean;
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