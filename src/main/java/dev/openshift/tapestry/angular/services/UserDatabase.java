package dev.openshift.tapestry.angular.services;

import dev.openshift.tapestry.angular.data.user.User;

import java.util.Date;


public interface UserDatabase
{

	User getUserById(Integer id);

    User getUserByLogin(String login);

	void updateUser(Integer id);
	
	Date getLastModifiedById(Integer id);

}