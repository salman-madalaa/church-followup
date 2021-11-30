package com.ZionFellowshipChurch.Followup.controller;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import com.ZionFellowshipChurch.Followup.ModelClasses.followupPerson;
import com.ZionFellowshipChurch.Followup.service.followUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Lenovo on 29-03-2020.
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/followupPerson")
public class followupPersonController {


    @Autowired
    private followUpService followUpService;

    @RequestMapping(value = "/new",method = RequestMethod.POST)
    public followupPerson followupPerson(@RequestBody followupPerson followupPerson)
    {
        return followUpService.saveFollowupPerson(followupPerson);
    }

    @RequestMapping(value = "/getall",method = RequestMethod.GET)
    public List<followupPerson> getAllCustomers()
    {
        return followUpService.getAllFollowUpPersons();
    }

    @RequestMapping(value = "/{personId}",method = RequestMethod.DELETE)
    public void delete(@PathVariable("personId") Long  id)
    {
        followUpService.delete(id);
    }

    @RequestMapping(value = "/{personId}",method = RequestMethod.PUT)
    public followupPerson update(@PathVariable("personId") Long id,@RequestBody followupPerson followupPerson)
    {
        return   followUpService.updateFollowupPerson(id,followupPerson);
    }


}
