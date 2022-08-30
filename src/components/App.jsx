import { Component } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState(prevState => (
      { [name]: prevState[name] + 1 }
    ));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) =>
      total + item, 0);
  }
  

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.countTotalFeedback()
      && this.state.good * 100 / this.countTotalFeedback());
  }
  

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback()
            ? <Statistics
                list={this.state}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            : <Notification message="There is no feedback"/>
          }
        </Section>
      </>
    );
  }
};
