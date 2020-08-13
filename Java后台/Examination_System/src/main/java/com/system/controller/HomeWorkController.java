package com.system.controller;

import com.system.exception.CustomException;
import com.system.po.*;
import com.system.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/handin")
public class HomeWorkController {
    @Resource(name = "homeworkServiceImpl")
    private HomeworkService homeworkService;

    @RequestMapping(value = "/handinhomework",method ={RequestMethod.POST,RequestMethod.GET} )
    @ResponseBody
    public Map<String,Object> handinhomework(HomeWork homework)throws Exception{
        Map<String,Object> map = new HashMap<String, Object>();
        System.out.println("我叫阿giao");
        homeworkService.handinById(homework.getUserid(), homework);
        map.put("handinhomework","true");
        return map;
    }
}
