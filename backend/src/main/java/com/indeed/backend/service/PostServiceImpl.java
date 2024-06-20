package com.indeed.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indeed.backend.dao.PostDAO;
import com.indeed.backend.dto.PostDTO;
import com.indeed.backend.model.PostModel;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostDAO postDAO;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();

        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setSalary(postDTO.getSalary());
        postModel.setTechnology(postDTO.getTechnology());
        postModel.setType(postDTO.getType());
        postModel.setExperience(postDTO.getExperience());

        return postDAO.save(postModel);
    }

    @Override
    public List<PostModel> getAllPosts() {
        return postDAO.findAll();
    }
}
