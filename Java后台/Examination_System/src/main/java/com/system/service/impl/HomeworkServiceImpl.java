package com.system.service.impl;

import com.system.mapper.HomeworkMapper;
import com.system.po.*;
import com.system.service.HomeworkService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Student
 */
@Service
public class HomeworkServiceImpl implements HomeworkService {

    //使用spring 自动注入
    @Autowired
    private HomeworkMapper homeworkMapper;

    public void handinById(Integer id, HomeWork homework) throws Exception {
        homeworkMapper.handinByPrimaryKey(homework);
        System.out.println("我叫阿jiao");
    }

}
