package com.indeed.backend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.indeed.backend.model.PostModel;

public interface PostDAO extends MongoRepository<PostModel, String> {
    
}
