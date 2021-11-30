package com.ZionFellowshipChurch.Followup.repository;

import com.ZionFellowshipChurch.Followup.ModelClasses.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Lenovo on 17-03-2020.
 */
@Repository
public interface userRepository extends JpaRepository<User,Long> {

    @Query(value = "select i from followup i where i.personid = 1")
    List<User> getAllNewPersons();
}
