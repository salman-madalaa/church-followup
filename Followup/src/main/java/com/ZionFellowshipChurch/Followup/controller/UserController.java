package com.ZionFellowshipChurch.Followup.controller;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import com.ZionFellowshipChurch.Followup.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Lenovo on 17-03-2020.
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private  userService userService;

    @RequestMapping(value = "/new",method = RequestMethod.POST)
    public User user(@RequestBody User user)
    {
        return userService.save(user);
    }

    @RequestMapping(value = "/getall",method = RequestMethod.GET)
    public List<User> getAllCustomers()
    {
        return userService.getAllpersons();
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long  id)
    {
        userService.delete(id);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.PUT)
    public User update(@PathVariable("id") Long id,@RequestBody User user)
    {
      return   userService.update(id,user);
    }


}
