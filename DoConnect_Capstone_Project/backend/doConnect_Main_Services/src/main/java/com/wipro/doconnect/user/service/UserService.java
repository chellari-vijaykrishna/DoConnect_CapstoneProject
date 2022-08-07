package com.wipro.doconnect.user.service;

import java.io.IOException;

/**
*
*@author kunal
*/

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.multipart.MultipartFile;

import com.wipro.doconnect.answer.entity.Answer;
import com.wipro.doconnect.dto.AskQuestionDTO;
import com.wipro.doconnect.dto.PostAnswerDTO;
import com.wipro.doconnect.image.entity.ImageModel;
import com.wipro.doconnect.question.entity.Question;
import com.wipro.doconnect.user.entity.User;
import com.wipro.doconnect.vo.Message;

public interface UserService {

	public User userLogin(String email, String password);

	public String userLogout(Long userId);

	public User userRegister(@Valid User user);

	public Question askQuestion(@Valid AskQuestionDTO askQuestionDTO);

	public Answer giveAnswer(@Valid PostAnswerDTO postAnswerDTO);

	public List<Question> searchQuestion(String question);

	public List<Answer> getAnswers(Long questionId);

	public List<Question> getQuestions(String topic);

	public BodyBuilder uplaodImage(MultipartFile file) throws IOException;

	public ImageModel getImage(String imageName);

	public Message sendMessage(@Valid Message message);

}
