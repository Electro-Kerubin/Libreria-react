import { Carrusel } from "./components/Carrusel";
import { Heros } from "./components/Heros";
import { LibreriaServices } from "./components/LibreriaServices";
import { TopLibreria } from "./components/TopLibreria";

export const HomePage = () => {
    return (
        <>
            <TopLibreria />
            <Carrusel />
            <Heros />
            <LibreriaServices />
        </>
    );
}