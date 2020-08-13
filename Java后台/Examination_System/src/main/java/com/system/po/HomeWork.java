package com.system.po;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class HomeWork {
    private Integer userid;

    private String handin;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getHandin() {
        return handin;
    }

    public void setHandin(String handin) {
        this.handin = handin;
    }

}