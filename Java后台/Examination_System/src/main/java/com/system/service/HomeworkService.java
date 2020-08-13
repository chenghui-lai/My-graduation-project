package com.system.service;

import com.system.po.HomeWork;

import java.util.List;

/**
 * Student学生Service层
 */
public interface HomeworkService {

    //根据id个更新学生信息
    void handinById(Integer id, HomeWork homework) throws Exception;

}
