import useDarkMode from 'use-dark-mode';

export default function dMode() {
    const darkMode = useDarkMode(true);
    const dtheme = "nes-container is-dark with-title";
    const ltheme = "nes-container with-title";
    return darkMode.value ? dtheme : ltheme;
}

