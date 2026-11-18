import { useState } from "react";

export function useToggle (initial=false) {
    const [on, SetOn] = useState(initial);

    function toggle() {
        SetOn((value) => !value);
    }

    return [on, toggle] as const;
}