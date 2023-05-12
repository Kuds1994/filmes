package com.example.springbootmovies.movies.movies.service;

import com.example.springbootmovies.movies.utils.S3Util;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;

@AllArgsConstructor
@Service
public class FilesStorageService  {

    private final Path root = Paths.get("/uploads");

    public String saveImage(MultipartFile file){

        SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyyHHmmssSSS");
        String nameFile = sdf.format(new Date()) + "." + file.getOriginalFilename().split("\\.")[1];

        try{

            S3Util.uploadFile(nameFile, file.getInputStream());
            return nameFile;

        } catch (IOException e) {

            e.printStackTrace();
            return "";

        }

    }

}
