package com.ZionFellowshipChurch.Followup.ModelClasses;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Lenovo on 29-03-2020.
 */
@Data
@Entity
@Table(name = "followupPerson")
public class followupPerson {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "person_id")
    private Long personId;

    @Column
    private String name;

    @Column
    private Long phone;

    @Column(name = "user_id")
    private Long userId;


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public followupPerson() {

    }

 /*
    @OneToMany
    @JoinColumn(name = "person_id",referencedColumnName = "person_id")
    private List<User> users;




    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    */


}
