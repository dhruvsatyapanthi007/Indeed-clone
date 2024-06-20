package com.indeed.backend.controller;

import com.indeed.backend.constants.APIConstants;
import com.indeed.backend.dto.PostDTO;
import com.indeed.backend.model.PostModel;
import com.indeed.backend.service.PostService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin
public class PostController {

    final PostService postService;

    @PostMapping(APIConstants.SAVE_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest) {
        return this.postService.savePost(postDTORequest);
    }

    @GetMapping(APIConstants.GET_ALL_POSTS)
    public List<PostModel> getAllPosts() {
        return this.postService.getAllPosts();
    }
}
