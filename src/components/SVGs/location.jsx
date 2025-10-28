export function LocationRipple24(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g fill="none">
                <path
                    fill="url(#fluentColorLocationRipple242)"
                    d="M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4"
                ></path>
                <path
                    fill="url(#fluentColorLocationRipple240)"
                    d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316c1.22 1.537 2.678 2.829 3.655 3.622c.926.75 2.228.75 3.154 0c.977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2"
                ></path>
                <path
                    fill="url(#fluentColorLocationRipple241)"
                    d="M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                ></path>
                <defs>
                    <linearGradient
                        id="fluentColorLocationRipple240"
                        x1="1.219"
                        x2="13.202"
                        y1="-2.857"
                        y2="16.549"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F97DBD"></stop>
                        <stop offset="1" stopColor="#D7257D"></stop>
                    </linearGradient>
                    <linearGradient
                        id="fluentColorLocationRipple241"
                        x1="9.79"
                        x2="12.394"
                        y1="9.721"
                        y2="12.428"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FDFDFD"></stop>
                        <stop offset="1" stopColor="#FECBE6"></stop>
                    </linearGradient>
                    <radialGradient
                        id="fluentColorLocationRipple242"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(-10.678 100.2 -51.93)scale(14.3921 6.38107)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#7B7BFF"></stop>
                        <stop offset=".502" stopColor="#A3A3FF"></stop>
                        <stop offset="1" stopColor="#CEB0FF"></stop>
                    </radialGradient>
                </defs>
            </g>
        </svg>
    )
}
