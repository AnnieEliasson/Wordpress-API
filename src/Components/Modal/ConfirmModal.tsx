type Props = {
  setAnswer: (answer: string) => void;
};

const ConfirmModal = ({ setAnswer }: Props) => {
  const handleYesClick = () => {
    setAnswer("yes");
  };

  const handleNoClick = () => {
    setAnswer("no");
  };

  return (
    <div className="ConfirmModalContainer">
      <div className="ConfirmModal">
        <p>Är du säker?</p>
        <div className="buttons">
          <button onClick={handleYesClick}>Ja</button>
          <button onClick={handleNoClick}>Nej</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
