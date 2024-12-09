import './style.css';
import addres from '../../assets/addres-icon.svg';
import whatsapp from '../../assets/whatsapp-icon.svg';

// eslint-disable-next-line react/prop-types
const SocialIcons = ({ icon }) => {
  return (
    <a href="" className="icon">
      {icon === 'addres-icon' ? (
        <i>
          <img src={addres} alt="" />
        </i>
      ) : (
        <i>
          <img src={whatsapp} alt="" />
        </i>
      )}
    </a>
  );
};

export default SocialIcons;
