package com.system.mapper;

import com.system.po.HomeWork;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HomeworkMapper {

    int handinByPrimaryKey(HomeWork record);

}