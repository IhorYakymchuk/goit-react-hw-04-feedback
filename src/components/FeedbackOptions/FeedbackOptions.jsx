import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <OptionsList>
      {options.map(option => (
        
          <Button name={option} type="button" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </Button>
       
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;