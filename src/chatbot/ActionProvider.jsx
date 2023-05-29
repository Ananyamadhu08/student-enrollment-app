import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveStudentInfo } from '../slices/studentSlice';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleGotIt = () => {
    const botMessage = createClientMessage('Got it', {});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    handleEnterName();
  };

  const handleEnterName = () => {
    const botMessage = createChatBotMessage('Enter Your Name', {
      delay: 1000,
      widget: 'nameInput',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEnterAge = () => {
    const botMessage = createChatBotMessage('Enter Your Age', {
      delay: 1000,
      widget: 'ageDropdown',
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleStudentEnrollment = () => {
    const botMessage = createChatBotMessage(
      'Thank you. In 5 seconds bot will exit.'
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));

    let count = 5;

    setInterval(() => {
      const countMessage = createChatBotMessage(`${count--}...`);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, countMessage],
      }));
    }, 1000);

    dispatch(saveStudentInfo());

    setTimeout(() => {
      navigate('/enrolledStudent');
    }, 6000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleEnterName,
            handleEnterAge,
            handleStudentEnrollment,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
