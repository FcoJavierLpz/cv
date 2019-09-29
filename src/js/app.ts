const removeFadeOut = ( el:any, speed:number ) => {
    let seconds = speed/500;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(() => {
        el.parentNode.removeChild(el);
    }, speed);
}

export const loading = () => {
    let floorElements = document.getElementsByClassName("spinner") as HTMLCollectionOf<HTMLElement>;
    removeFadeOut(floorElements[0], 2500);
}
