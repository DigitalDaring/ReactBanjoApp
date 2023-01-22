import './sexy-button.styles.scss';

type SexyButtonProperties = {
    text: string;
    onClick: () => void;
};

const SexyButton = ({ text, onClick }: SexyButtonProperties) => {
    return <button onClick={() => onClick()}>{text}</button>;
};

export default SexyButton;