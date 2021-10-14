let screenSize = () => {
    if (typeof window !== "undefined") {
        return screen.width;
    }
}

let screenType = () => {
    if (typeof window !== "undefined") {
        let type = ""
        let size = screenSize();
        switch (true) {
            case (size < 576):
                type = "xs"
                break;
            case (size >= 576 && size < 992):
                type = "sm"
                break;
            case (size >= 992 && size < 1200):
                type = "lg"
                break;
            case (size >= 1200):
                type = "xl"
                break;
            default:
                break;
        }
        console.log(type)
        return type;
    }
}


export {screenSize,screenType}