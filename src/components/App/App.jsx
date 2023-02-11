import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Wrapper } from './App.styled';

export default function App() {
  const feedbackTypes = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    Math.round((good * 100) / countTotalFeedback) || 0;

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback yet"></Notification>
        )}
      </Section>
    </Wrapper>
  );
}
