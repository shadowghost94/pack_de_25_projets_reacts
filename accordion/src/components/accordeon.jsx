// simple selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordeon() {
    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] =
        useState(false);

    function handleSingleSlection(objetid) {
        if (enableMultipleSelection) {
            setSelected(selected === objetid ? null : objetid);
        }
    }

    function handleMultipleSelection() {
        setEnableMultipleSelection(!enableMultipleSelection);
    }

    return (
        <div className="wrapper">
            <button onClick={handleMultipleSelection}>
                Enable Multiple Selection
            </button>
            {enableMultipleSelection ? (
                <div>
                    Veuillez cliquer sur le button ci-dessus pour désactiver la
                    fonction système accordéon
                </div>
            ) : (
                <div>
                    Veuillez cliquer sur le button ci-dessus pour activer la
                    fonction système accodéon
                </div>
            )}
            <div className="accordeon">
                {data && data.length > 0 ? (
                    data.map((objetdata) => (
                        <div className="objet" key={objetdata.id}>
                            <div
                                className="title"
                                onClick={() =>
                                    handleSingleSlection(objetdata.id)
                                }
                            >
                                <h3>{objetdata.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === objetdata.id && (
                                <div className="reponse">
                                    {objetdata.reponse}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>Pas de données !</div>
                )}
            </div>
        </div>
    );
}

export default Accordeon;
