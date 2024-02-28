export interface ExerciseSession {
    id: number | undefined;
    routine: number | undefined;
    exercise: Exercise;
    reps: number;
    sets: number;
    weight: number;
}

export interface Exercise {
    id: number | undefined;
    name: string;
    gif: string;
    muscle_group: string;
}

export interface Routine {
    id: number;
    title: string;
    sessions: ExerciseSession[];
    workout: number;
}

export interface Workout {
    id: number;
    name: string;
    routines: Routine[];
    active: boolean;
}

export interface Meal {
    id: number | undefined;
    name: string;
    time: string;
    day: number | undefined;
}

export interface Day {
    id: number | undefined;
    name: string;
    meals: Meal[];
    diet: number;
}

export interface Meal {
    id: number | undefined;
    name: string;
    time: string;
}

export interface Day {
    id: number | undefined;
    name: string;
    meals: Meal[];
}

export interface Diet {
    id: number | undefined;
    name: string;
    days: Day[];
    active: boolean;
}