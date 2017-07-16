package live.abhishek.gameserver.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/send")
    public String processChat(String chat){
        return chat + "returned!";
    }

}
