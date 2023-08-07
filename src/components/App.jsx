import { useState } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Message } from './Message/Message';

export const App = () => {
  const [mark, setMark] = useState({good: 0, neutral: 0, bad: 0,});

  const onLeaveFeedback = state => {
    setMark({...mark, [state]: mark[state] + 1,})
  };

  const calcTotalValue = () => {
    if (mark.good !== 0 || mark.neutral !== 0 || mark.bad !== 0) {
      const total = mark.good + mark.neutral + mark.bad;
      return total;
  };
  return 0;
  };
 const countPositiveFeedbackPercentage = (good)=> {
  let positive = calcTotalValue() !== 0 ? Math.round((good / calcTotalValue()) * 100):0;
  return positive;
  }
  const options = Object.keys(mark);
  const totalValue = calcTotalValue;
  const positive = countPositiveFeedbackPercentage(mark.good);
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options}></FeedbackOptions>
          </Section>
          <Section title="Statisctics">
            {totalValue !== 0 ? (<Statistics good={mark.good} neutral={mark.neutral} bad={mark.bad} total={totalValue} positive={positive}></Statistics>) : (<Message message="There is no feedback" />)}
          </Section>
        </div>
      );
    };