export function firstUpperCase(v: string): string {
    return v.toLowerCase().replace(/\b[a-z]/g, (s) => {
        return s.toUpperCase();
    })
}