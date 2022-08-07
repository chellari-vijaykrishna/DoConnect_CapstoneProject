package com.wipro.doconnect.admin.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.doconnect.admin.entity.Admin;
import com.wipro.doconnect.admin.repository.AdminRepo;
import com.wipro.doconnect.answer.entity.Answer;
import com.wipro.doconnect.answer.repository.AnswerRepo;
import com.wipro.doconnect.dto.ResponseDTO;
import com.wipro.doconnect.exception.AlreadyThere;
import com.wipro.doconnect.exception.NotFound;
import com.wipro.doconnect.question.entity.Question;
import com.wipro.doconnect.question.repository.QuestionRepo;
import com.wipro.doconnect.user.entity.User;
import com.wipro.doconnect.user.repository.UserRepo;
import com.wipro.doconnect.util.EmailSenderService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepo adminRepo;

	@Autowired
	private QuestionRepo questionRepo;

	@Autowired
	private AnswerRepo answerRepo;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private EmailSenderService emailSenderService;

	@Override
	public Admin adminLogin(String email, String password) {

		Admin admin = adminRepo.findByEmail(email);
		if (Objects.isNull(admin))
			throw new NotFound();

		if (admin.getPassword().equals(password)) {
			admin.setIsActive(true);
			adminRepo.save(admin);
		} else
			throw new NotFound();
		return admin;
	}

	@Override
	public String adminLogout(Long adminId) {

		Admin admin = adminRepo.findById(adminId).orElseThrow(() -> new NotFound("Admin not found"));
		admin.setIsActive(false);
		adminRepo.save(admin);
		return "Logged Out";
	}

	@Override
	public Admin adminRegister(Admin admin) {

		Admin admin1 = adminRepo.findByEmail(admin.getEmail());
		if (Objects.isNull(admin1))
			return adminRepo.save(admin);

		throw new AlreadyThere();
	}

	@Override
	public List<Question> getUnApprovedQuestions() {
		return questionRepo.findByIsApproved();
	}

	@Override
	public List<Answer> getUnApprovedAnswers() {
		return answerRepo.findByIsApproved();
	}

	@Override
	public Question approveQuestion(Long questionId) {

		Question question = questionRepo.findById(questionId).orElseThrow(() -> new NotFound("Question not found"));

		question.setIsApproved(true);
		question = questionRepo.save(question);

		// a mail should go to the list of admins that the question is approved
		List<Admin> admins = adminRepo.findAll();
		for (Admin admin : admins) {
			sendMail(admin.getEmail(), "Question has been Approved successfully");
		}
		

		return question;
	}

	@Override
	public Answer approveAnswer(Long answerId) {
		Answer answer = answerRepo.findById(answerId).orElseThrow(() -> new NotFound("Answer not found"));

		answer.setIsApproved(true);
		answer = answerRepo.save(answer);

		// a mail should go to the admin that a answer is published
		List<Admin> admins = adminRepo.findAll();
		for (Admin admin : admins) {
			sendMail(admin.getEmail(), "Answer has been Approved successfully");
		}

		return answer;
	}

	@Override
	public ResponseDTO deleteQuestion(Long questionId) {

		ResponseDTO responseDTO = new ResponseDTO();
		Question question = questionRepo.findById(questionId).orElseThrow(() -> new NotFound("Question not found"));

		questionRepo.delete(question);
		responseDTO.setMsg("The Question has been Removed");
		return responseDTO;
	}

	@Override
	public ResponseDTO deleteAnswer(Long answerId) {
		ResponseDTO responseDTO = new ResponseDTO();

		Answer answer = answerRepo.findById(answerId).orElseThrow(() -> new NotFound("Answer not found"));

		answerRepo.delete(answer);
		responseDTO.setMsg("The Answer has been Removed");
		return responseDTO;
	}

	public Boolean sendMail(String emailId, String type) {
		try {
			emailSenderService.sendEmail(emailId, type, type);
			return true;
		} catch (Exception e) {
			System.out.println("error in sending mail " + e);
			return false;
		}
	}

	@Override
	public User getUser(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public List<User> getAllUser() {
		return userRepo.findAll();
	}

}
