package com.indeed.backend.service;
import java.util.List;

import com.indeed.backend.dto.PostDTO;
import com.indeed.backend.model.PostModel;

public interface PostService {
    public PostModel savePost(PostDTO postDTO);
    public List<PostModel> getAllPosts();
}
