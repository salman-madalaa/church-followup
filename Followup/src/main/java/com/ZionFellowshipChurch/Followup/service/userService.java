package com.ZionFellowshipChurch.Followup.service;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import com.ZionFellowshipChurch.Followup.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 17-03-2020.
 */
@Service
public class userService {

    @Autowired
    private userRepository userRepository;

    public User save(User user)
    {
        return userRepository.save(user);
    }


    public List<User> getAllpersons()
    {
        return userRepository.findAll();
    }

    public void delete(Long id)
    {
        userRepository.deleteById(id);
    }

    public User update(Long id,User user)
    {
        user.setUser_id(id);
       return userRepository.save(user);
    }
}
