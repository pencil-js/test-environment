import browserEnv from "browser-env";

browserEnv(["window", "document"], {
    pretendToBeVisual: true,
});

window.Path2D = class Path2D {
    rect () {}

    arc () {}

    moveTo () {}

    ellipse () {}
};

window.DOMMatrix = class DOMMatrix {
};

window.document.fonts = new Set();

window.FontFace = class FontFace {
    load () {
        return new Promise((resolve) => {
            setTimeout(resolve, 50);
        });
    }
};

window.CanvasRenderingContext2D = class CanvasRenderingContext2D {
    constructor (canvas) {
        this.canvas = canvas;
    }

    clearRect () {}

    fillRect () {}

    getImageData () {
        return {
            width: 5,
            height: 10,
            data: new Uint8ClampedArray(),
        }
    }

    putImageData () {}

    save () {}

    restore () {}

    translate () {}

    rotate () {}

    scale () {}

    setTransform () {}

    drawImage () {}

    measureText () {
        return {
            width: 5,
        };
    }
};

window.HTMLCanvasElement.prototype.getContext = function getContext () {
    return new window.CanvasRenderingContext2D(this);
};
window.HTMLCanvasElement.prototype.toDataURL = type => type;

if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", {
        value: () => "",
    });
}
if (typeof window.URL.revokeObjectURL === "undefined") {
    Object.defineProperty(window.URL, "revokeObjectURL", {
        value: () => {},
    });
}
