import { useState } from 'react';

const Modal = ({
  children, visible, hide, fermer, more,
}) => {
  const popup = `popup text-white ${visible ? 'block' : 'hidden'}`;
  const [buttonM, setButtonM] = useState(false);
  function ChangeButton() {
    more();
    setButtonM(!buttonM);
  }
  function ChangeButtonX() {
    setButtonM(false);
    hide();
    more();
  }
  return (
    <div className={popup}>
      {fermer ? null : (
        <button className="close" onClick={ChangeButtonX} type="button">X</button>
      )}
      {children}
      <button className="more" onClick={ChangeButton} type="button">{buttonM ? 'less' : 'more'}</button>
      <br />
    </div>
  );
};
export default Modal;
