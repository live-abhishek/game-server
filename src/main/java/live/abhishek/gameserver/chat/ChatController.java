package live.abhishek.gameserver.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.HashMap;
import java.util.Map;

@Controller
public class ChatController {

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public Map<String, String> processChat(String chat){
        Map<String, String> map = new HashMap<>();
        map.put("text", chat);
        map.put("sender", "masterchief");
        return map;
    }

}
