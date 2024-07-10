import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function CustomCursor() {

    return (
        <div className="">
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color='9, 163, 214'
                outerAlpha={0.3}
                innerScale={1}
                outerScale={7}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </div>
    );
}