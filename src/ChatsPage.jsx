import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId = {'9ab22e81-4f44-4d43-9cd3-a344986c6ca4'}
          username = { props.user.username }
          secret = { props.user.secret }
          style = {{ height: '100%' }}
        />
        </div>
      );
  };
  export default ChatsPage;