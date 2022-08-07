package com.wipro.doconnect.answer.entity;

/**
*
*@author kunal
*/

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;

import com.wipro.doconnect.question.entity.Question;
import com.wipro.doconnect.user.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Answer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@NotBlank(message = "mention the answer")
	private String answer;
	@OneToOne
	private User answerUser;
	@OneToOne
	private Question question;
	private Boolean isApproved = false;

}
