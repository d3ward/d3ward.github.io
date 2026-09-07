// The themes app.css actually defines (see @plugin "daisyui/theme" blocks).
// Layout's ThemeProvider and Navbar's ThemeController both read this list, so
// a theme can't be offered in one and missing from the other.
export const THEMES = ["light", "dark"] as const;
