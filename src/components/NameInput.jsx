import { useState } from 'react';
import { createClientMessage } from 'react-chatbot-kit';

function NameInput(props) {
  const [name, setName] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const botMessage = createClientMessage(name);

      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

      props.actionProvider.handleEnterAge();
    }
  };

  return (
    <div className="name-input">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default NameInput;
