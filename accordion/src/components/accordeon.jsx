// simple selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordeon() {
    const [selected, setSelected] = useState(null);

    function handleSingleSlection(objetid) {
        setSelected(objetid);
    }

    return (
        <div className="wrapper">
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
