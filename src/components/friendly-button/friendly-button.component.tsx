import './friendly-button.styles.scss';

type FriendlyButtonProperties = {
    text: string;
    onClick: () => void;
};

const FriendlyButton = ({ text, onClick }: FriendlyButtonProperties) => {
    return <button onClick={() => onClick()}>{text}</button>;
};

export default FriendlyButton;