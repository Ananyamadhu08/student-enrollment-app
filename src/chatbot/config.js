import { createChatBotMessage } from 'react-chatbot-kit';
import { AgeDropdown, GotItButton, NameInput } from '../components';

const config = {
  initialMessages: [
    createChatBotMessage('Hello, Welcome to student info system!', {
      delay: 1000,
      widget: 'gotItButton',
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(55 48 163)',
    },
    chatButton: {
      backgroundColor: 'rgb(55 48 163)',
    },
  },
  widgets: [
    {
      widgetName: 'gotItButton',
      widgetFunc: (props) => <GotItButton {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'nameInput',
      widgetFunc: (props) => <NameInput {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'ageDropdown',
      widgetFunc: (props) => <AgeDropdown {...props} />,
      mapStateToProps: ['messages'],
    },
  ],
};

export default config;
