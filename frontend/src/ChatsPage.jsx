//import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
    // const chatProps = useMultiChatLogic('c9f587b4-7ff5-4c49-bac8-7e068547dadb',props.user.username, props.user.secret);
    // return(<div style={{height: '100vh'}}>
    //     <MultiChatSocket {...chatProps}/>
    //     <MultiChatWindow {...chatProps} style={{height : '100%'}}/>
    // </div>
    // )

    <div style={{height:'100vh'}}>
        <PrettyChatWindow
            projectId='c9f587b4-7ff5-4c49-bac8-7e068547dadb'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
            />
       </div>
    
    )
}

export default ChatsPage