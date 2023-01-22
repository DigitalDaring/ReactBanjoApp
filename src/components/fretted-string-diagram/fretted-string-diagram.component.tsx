import './fretted-string-diagram.styles.scss';

type FrettedStringDiagramProperties = {

};

const FrettedStringDiagram = () => {

    return  <div className="FullDiagram">
                <div className="Open4"></div><div className="Open3"></div><div className="Open2"></div><div className="Open1"></div>
                <div className="TopFret"></div>
                <div className="One4"></div><div className="One3"></div><div className="One2"></div><div className="One1"></div><div className="FretNum"></div>
                <div className="Two4"></div><div className="Two3"></div><div className="Two2"></div><div className="Two1"></div>
                <div className="Three4"></div><div className="Three3"></div><div className="Three2"></div><div className="Three1"></div>
                <div className="Four4"></div><div className="Four3"></div><div className="Four2"></div><div className="Four1"></div>
            </div>
}

export default FrettedStringDiagram;