export interface JokeInfo {
    id: string;
    answer: string;
    question: string;
}

export interface RandomJokeState {
    data: JokeInfo[];
    status: "default" | "loading" | "success" | "error";
    error: any;
}