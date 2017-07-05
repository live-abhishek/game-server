package live.abhishek.gameserver.controllers;

import live.abhishek.gameserver.beans.Pet;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * Created by Master Chief on 04-Jul-17.
 */
@RestController
@RequestMapping("/pets")
public class PetsController {

    @RequestMapping(method= RequestMethod.GET, produces = "application/json")
    public List<Pet> getPetList(){
        Pet pet1 = new Pet();
        pet1.setName("mike");
        Pet pet2 = new Pet();
        pet2.setName("lu");
        Pet pet3 = new Pet();
        pet3.setName("ogg");
        return Arrays.asList(pet1, pet2, pet3);
    }
}
