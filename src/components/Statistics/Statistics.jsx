import PropTypes from 'prop-types';
import { StatsList, ListItem, Totals } from './Statistics.styled';

export const Statistics = ({ list, total, positivePercentage }) => { 
    return (
        <>
            <StatsList>
                {Object.keys(list).map(item => (
                    <ListItem key={item}>{item}: <b>{list[item]}</b></ListItem>
                ))}
            </StatsList>
            <Totals>Total: {total}</Totals>
            <Totals>Positive feedback: {positivePercentage}%</Totals>
        </>
    );
}

Statistics.propTypes = {
    list: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}