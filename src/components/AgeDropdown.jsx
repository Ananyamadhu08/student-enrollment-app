import { useState } from 'react';
import { createClientMessage } from 'react-chatbot-kit';

function AgeDropdown(props) {
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);

    const botMessage = createClientMessage(event.target.value);

    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    props.actionProvider.handleStudentEnrollment();
  };

  const ageOptions = [];

  for (let age = 18; age <= 40; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  return (
    <div className="age-dropdown">
      <select id="age" value={selectedAge} onChange={handleAgeChange}>
        <option value="">Select an age</option>
        {ageOptions}
      </select>
    </div>
  );
}

export default AgeDropdown;
