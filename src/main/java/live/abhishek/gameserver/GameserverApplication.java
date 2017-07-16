package live.abhishek.gameserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.socket.config.annotation.*;

@SpringBootApplication
@EnableWebSocketMessageBroker
public class GameserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameserverApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry){
				registry.addMapping("/**").allowedOrigins("http://localhost:4200");
			}
		};
	}

	@Bean
	public AbstractWebSocketMessageBrokerConfigurer webSocketMessageBrokerConfigurer(){
		return new AbstractWebSocketMessageBrokerConfigurer() {
			@Override
			public void registerStompEndpoints(StompEndpointRegistry stompEndpointRegistry) {
				stompEndpointRegistry.addEndpoint("chat").withSockJS();
			}

			@Bean
			public void configureMessageBroker(MessageBrokerRegistry registry){
				registry.setApplicationDestinationPrefixes("/app");
				registry.enableSimpleBroker("/topic", "/queue");
			}
		};
	}
}
