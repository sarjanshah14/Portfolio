import { useCallback } from "react";
import useSound from "use-sound";

export const useSounds = () => {
    const [playPress] = useSound("/assets/keycap-sounds/press.mp3", { volume: 0.5 });
    const [playRelease] = useSound("/assets/keycap-sounds/release.mp3", {
        volume: 0.5,
    });

    const playPressSound = useCallback(() => {
        playPress();
    }, [playPress]);

    const playReleaseSound = useCallback(() => {
        playRelease();
    }, [playRelease]);

    return {
        playPressSound,
        playReleaseSound,
    };
};
