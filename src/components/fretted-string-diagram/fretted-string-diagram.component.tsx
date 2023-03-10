import './fretted-string-diagram.styles.scss';

type FrettedStringDiagramProperties = {

};

const FrettedStringDiagram = () => {

    return  <div className="FullDiagram">
                <div className="Open4"></div><div className="Open3"></div><div className="Open2"></div><div className="Open1"></div>
                <div className="TopFret"></div>
                <div className="One4 FretLine"></div><div className="One3 FretLine"></div><div className="One2 FretLine"></div><div className="One1 FretLine"></div><div className="FretNum"></div>
                <div className="Two4 FretLine"></div><div className="Two3 FretLine"></div><div className="Two2 FretLine"></div><div className="Two1 FretLine"></div>
                <div className="Three4 FretLine"></div><div className="Three3 FretLine"></div><div className="Three2 FretLine"></div><div className="Three1 FretLine"></div>
                <div className="Four4 FretLine"></div><div className="Four3 FretLine"></div><div className="Four2 FretLine"></div><div className="Four1 FretLine"></div>
            </div>
}

export default FrettedStringDiagram;