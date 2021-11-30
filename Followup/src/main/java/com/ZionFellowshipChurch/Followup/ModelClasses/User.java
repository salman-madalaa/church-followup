package com.ZionFellowshipChurch.Followup.ModelClasses;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

/**
 * Created by Lenovo on 17-03-2020.
 */
@Data
@Entity
@Table(name = "followup")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id",nullable = false)
    private Long user_id;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String email;

    @Column
    private Long phoneNumber;



    @Column
    @CreationTimestamp
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date date;

    @Column
    private String prayerRequest;

/*
    @Column(name = "person_id")
    private Long personid;

    public Long getPersonid() {
        return personid;
    }

    public void setPersonid(Long personid) {
        this.personid = personid;
    }
*/
    public User() {
    }


    @OneToMany
    @JoinColumn(name = "user_id",referencedColumnName = "user_id")
    private List<followupPerson> followupPersons;


}
