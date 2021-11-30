package com.ZionFellowshipChurch.Followup.service;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import com.ZionFellowshipChurch.Followup.ModelClasses.followupPerson;
import com.ZionFellowshipChurch.Followup.repository.followUpPersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Lenovo on 29-03-2020.
 */
@Service
public class followUpService {

    @Autowired
    private followUpPersonRepo followUpPersonRepo;

    public followupPerson saveFollowupPerson(followupPerson followupPerson)
    {
        return followUpPersonRepo.save(followupPerson);
    }


    public List<followupPerson> getAllFollowUpPersons()
    {
        return followUpPersonRepo.findAll();
    }

    public void delete(Long id)
    {
        followUpPersonRepo.deleteById(id);
    }

    public followupPerson updateFollowupPerson(Long id,followupPerson followupPerson)
    {
        followupPerson.setPersonId(id);
        return followUpPersonRepo.save(followupPerson);
    }


}
