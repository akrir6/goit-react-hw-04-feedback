import { useState } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export const App = () => {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  
  const onLeaveFeedback = (e) => {
    const { name } = e.target;
    setFeedBack(prevState => (
      {...prevState, [name]: prevState[name] + 1 }
    ));
  }

  const countTotalFeedback = () => {
    return Object.values(feedBack).reduce((total, item) =>
      total + item, 0);
  }
  

  const countPositiveFeedbackPercentage = () => {
    return Math.round(countTotalFeedback()
      && feedBack.good * 100 / countTotalFeedback());
  }
  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedBack)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback()
          ? <Statistics
              list={feedBack}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          : <Notification message="There is no feedback"/>
        }
      </Section>
    </>
  );
}

