import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c9f587b4-7ff5-4c49-bac8-7e068547dadb',props.user.username, props.user.secret);
    return(<div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height : '100%'}}/>
    </div>
    )
}

export default ChatsPage