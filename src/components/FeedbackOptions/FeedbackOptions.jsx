import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <ButtonBox>
        {options.map(item => (
            <Button type="button" onClick={onLeaveFeedback} name={item} key={item}>
                {item}
            </Button>
            ))
        }
    </ButtonBox>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}