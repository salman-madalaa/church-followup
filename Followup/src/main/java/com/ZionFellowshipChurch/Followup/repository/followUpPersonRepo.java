package com.ZionFellowshipChurch.Followup.repository;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import com.ZionFellowshipChurch.Followup.ModelClasses.followupPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Lenovo on 29-03-2020.
 */
@Repository
public interface followUpPersonRepo extends JpaRepository<followupPerson,Long> {
}
