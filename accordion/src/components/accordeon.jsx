// simple selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordeon() {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [tableMultiSelection, setTableMultiSelection] = useState([]);

    function handleSingleSelection(objetID) {
        if (selected == objetID) setSelected(null);
        else setSelected(objetID);
    }
    function EnableMultiSelection() {
        if (multiSelection == true) setTableMultiSelection([]);
        else setSelected(null);
        setMultiSelection(!multiSelection);
    }
    function handleMultiSelection(objetID) {
        let cpyTableMultiSelection = [...tableMultiSelection];
        const indexObjet = cpyTableMultiSelection.indexOf(objetID);

        if (indexObjet == -1) cpyTableMultiSelection.push(objetID);
        else cpyTableMultiSelection.splice(indexObjet, 1);

        setTableMultiSelection(cpyTableMultiSelection);
    }
    return (
        <div className="wrapper">
            <button onClick={EnableMultiSelection}>
                Enable Multi Selection
            </button>
            {multiSelection ? (
                <div>La sélection multiple est activé.</div>
            ) : (
                <div>La sélection multiple est désactivé.</div>
            )}
            <div className="accordeon">
                {data.map((objetdata) => (
                    <div className="objet">
                        <div
                            className="title"
                            onClick={
                                multiSelection
                                    ? () => handleMultiSelection(objetdata.id)
                                    : () => handleSingleSelection(objetdata.id)
                            }
                        >
                            <h3>{objetdata.question}</h3>
                            <span>+</span>
                        </div>
                        {objetdata.id === selected ||
                        tableMultiSelection.indexOf(objetdata.id) !== -1 ? (
                            <div className="reponse">{objetdata.reponse}</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Accordeon;
