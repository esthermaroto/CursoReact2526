export type theme = "light" | "dark" | "system"

export interface User {
    id: string,
    name: string,
    email: string,
    avatar: string,
    role: "admin" | "user"
}

export interface AppState {
    user: User | null,
    theme: theme,
    language: string
}

export interface AppContextType {
    state: AppState,
    setUser: (user: User | null) => void,
    setTheme: (theme: theme) => void,
    setLanguage: (language: string) => void
}