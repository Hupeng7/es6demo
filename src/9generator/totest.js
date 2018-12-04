"use strict";

import to from './to.js';

async function asyncTask() {
    let err, user, savedTask;

    [err, user] = await to(UserModel.findById(1));
    if (!user) throw new CustomerError('No user found');

    [err, savedTask] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
    if (err) throw new CustomError('Error occured while saving task');

    if (user.notificationEnabled) {
        const [err] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
        if (err) console.error('Just log the error and continue flow')
    }

}